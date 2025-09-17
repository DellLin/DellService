using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

[Route("api/[controller]")]
[ApiController]
public class LineBotController : ControllerBase
{
    private readonly LineBotService _lineBotService;
    private readonly AccountService _accountService;
    private readonly ILogger<LineBotController> _logger;

    public LineBotController(LineBotService lineBotService,
    AccountService accountService,
    ILogger<LineBotController> logger)
    {
        _logger = logger;
        _lineBotService = lineBotService;
        _accountService = accountService;
    }

    [HttpPost]
    public async Task<IActionResult> Post(LineBotEvent lineBotEvent)
    {
        try
        {
            // 檢查輸入是否為 null
            if (lineBotEvent?.Events == null)
            {
                _logger.LogWarning("LineBotController.Post - 接收到空的事件資料");
                return BadRequest("無效的事件資料");
            }

            // 記錄請求開始
            _logger.LogInformation("LineBotController.Post - 開始處理 LineBot 事件，事件數量: {EventCount}", lineBotEvent.Events.Count);

            foreach (var evt in lineBotEvent.Events)
            {
                if (evt.ReplyToken == null)
                {
                    _logger.LogWarning("LineBotController.Post - 事件缺少 ReplyToken，跳過處理");
                    continue;
                }

                if (evt.Source?.UserId == null)
                {
                    _logger.LogWarning("LineBotController.Post - 事件缺少 UserId，跳過處理");
                    continue;
                }

                _logger.LogInformation("LineBotController.Post - 處理事件類型: {EventType}, UserId: {UserId}", evt.Type, evt.Source.UserId);

                var accessToken = await _lineBotService.GetAccessTokenAsync();

                if (evt.Type == "flow")
                {
                    _logger.LogInformation("LineBotController.Post - 處理 flow 事件，建立新帳戶");
                    var newAccount = new Account()
                    {
                        LineBotUserId = evt.Source.UserId,
                    };
                    var account = await _accountService.AddAccount(newAccount);
                    await _lineBotService.ReplyMessageAsync(evt.ReplyToken, accessToken, "歡迎使用本服務");
                    _logger.LogInformation("LineBotController.Post - flow 事件處理完成，帳戶 ID: {AccountId}", account.Id);
                }
                else if (evt.Type == "message")
                {
                    var userId = evt.Source.UserId;
                    _logger.LogInformation("LineBotController.Post - 處理訊息事件，User ID: {UserId}, 訊息內容: {MessageText}", userId, evt.Message?.Text ?? "無訊息內容");

                    var account = await _accountService.GetAccountByLineBotUserId(userId);
                    if (account == null)
                    {
                        _logger.LogInformation("LineBotController.Post - 使用者不存在，建立新帳戶: {UserId}", userId);
                        var newAccount = new Account()
                        {
                            Id = Guid.NewGuid().ToString(),
                            LineBotUserId = userId,
                        };
                        account = await _accountService.AddAccount(newAccount);
                    }

                    if (evt.Message?.Text == "註冊")
                    {
                        if (account.LineId != null)
                        {
                            _logger.LogInformation("LineBotController.Post - 使用者已註冊，發送已註冊訊息");
                            var alreadLinkMessage = new LineMessage()
                            {
                                To = account.LineBotUserId!,
                                Messages = new List<LineMessage.Message>
                                {
                                    new LineMessage.Message
                                    {
                                        Type = "text",
                                        Text = "您已註冊"
                                    }
                                }
                            };
                            await _lineBotService.PushMessageAsync(alreadLinkMessage, accessToken);
                        }
                        else
                        {
                            _logger.LogInformation("LineBotController.Post - 產生註冊連結給使用者: {UserId}", userId);
                            var linkToken = await _lineBotService.GenerateLinkTokenAsync(account.LineBotUserId!, accessToken);
                            var message = new LineMessage()
                            {
                                To = account.LineBotUserId!,
                                Messages = new List<LineMessage.Message>
                                {
                                    new LineMessage.Message
                                    {
                                        Type = "template",
                                        AltText = "請點選下方連結註冊",
                                        Template = new LineMessage.Template {
                                            Type = "buttons",
                                            Text = "註冊",
                                            Actions = new List<LineMessage.Action>
                                            {
                                                new LineMessage.Action
                                                {
                                                    Type = "uri",
                                                    Label = "註冊",
                                                    Uri = $"{Request.Scheme}://{Request.Host.Value}/api/LineLogin/LineLogin?linkToken={linkToken}",
                                                }
                                            }

                                        }
                                    }
                                }
                            };
                            await _lineBotService.PushMessageAsync(message, accessToken);
                        }
                    }
                    else
                    {
                        _logger.LogInformation("LineBotController.Post - 回覆使用者訊息: {MessageText}", evt.Message?.Text);
                        var message = new LineMessage()
                        {
                            To = account.LineBotUserId!,
                            Messages = new List<LineMessage.Message>
                            {
                                new LineMessage.Message
                                {
                                    Type = "text",
                                    Text = evt.Message?.Text ?? ""
                                }
                            }
                        };
                        await _lineBotService.PushMessageAsync(message, accessToken);
                    }
                }
                else if (evt.Type == "accountLink")
                {
                    if (evt.Link?.Nonce == null)
                    {
                        _logger.LogWarning("LineBotController.Post - accountLink 事件缺少 Nonce");
                        continue;
                    }

                    _logger.LogInformation("LineBotController.Post - 處理帳戶連結事件，Nonce: {Nonce}", evt.Link.Nonce);
                    var account = await _accountService.GetAccountByNonce(evt.Link.Nonce);
                    if (account != null)
                    {
                        account.LineBotUserId = evt.Source.UserId;
                        account.Nonce = string.Empty;
                        await _accountService.UpdateAccount(account);
                        _logger.LogInformation("LineBotController.Post - 帳戶連結成功，帳戶 ID: {AccountId}", account.Id);
                        var message = new LineMessage()
                        {
                            To = account.LineBotUserId!,
                            Messages = new List<LineMessage.Message>
                            {
                                new LineMessage.Message
                                {
                                    Type = "text",
                                    Text = "註冊成功"
                                }
                            }
                        };
                        await _lineBotService.PushMessageAsync(message, accessToken);
                    }
                    else
                    {
                        _logger.LogWarning("LineBotController.Post - 帳戶連結失敗，找不到對應的 Nonce: {Nonce}", evt.Link.Nonce);
                        var message = new LineMessage()
                        {
                            To = evt.Source.UserId,
                            Messages = new List<LineMessage.Message>
                            {
                                new LineMessage.Message
                                {
                                    Type = "text",
                                    Text = "註冊失敗"
                                }
                            }
                        };
                        await _lineBotService.PushMessageAsync(message, accessToken);
                    }
                }
            }

            _logger.LogInformation("LineBotController.Post - 所有事件處理完成");
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "LineBotController.Post - 處理 LineBot 事件時發生錯誤");
            return StatusCode(500, "內部服務器錯誤");
        }
    }
    [Authorize]
    [HttpGet("GetState")]
    public async Task<bool> GetState()
    {
        try
        {
            var account = await _accountService.GetAccount(User.Identity?.Name ?? "");
            var accessToken = await _lineBotService.GetAccessTokenAsync();
            return await _lineBotService.GetState(account, accessToken);

        }
        catch
        {
            throw;
        }
    }
    [Authorize]
    [HttpPost("SendMessagetoSelf")]
    public async Task<bool> SendMessagetoSelf(string message)
    {
        try
        {
            var account = await _accountService.GetAccount(User.Identity?.Name ?? "");
            var alreadLinkMessage = new LineMessage()
            {
                To = account.LineBotUserId!,
                Messages = new List<LineMessage.Message>
                            {
                                new LineMessage.Message
                                {
                                    Type = "text",
                                    Text = message
                                }
                            }
            };
            var accessToken = await _lineBotService.GetAccessTokenAsync();
            return (await _lineBotService.PushMessageAsync(alreadLinkMessage, accessToken)) != null;
        }
        catch
        {
            throw;
        }
    }
}
