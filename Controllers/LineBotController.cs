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
        // 解析 JSON 格式的 request 
        System.Console.WriteLine("Request Body: " + lineBotEvent.ToString());
        _logger.LogInformation("Request Body: " + lineBotEvent.ToString());
        foreach (var evt in lineBotEvent.Events)
        {
            if (evt.ReplyToken == null)
            {
                continue;
            }
            var accessToken = await _lineBotService.GetAccessTokenAsync();
            if (evt.Type == "flow")
            {
                var newAccount = new Account()
                {
                    LineBotUserId = evt.Source.UserId,
                };
                var account = await _accountService.AddAccount(newAccount);
                await _lineBotService.ReplyMessageAsync(evt.ReplyToken, accessToken, "歡迎使用本服務");
            }
            if (evt.Type == "message")
            {
                var userId = evt.Source.UserId;
                _logger.LogInformation("User id: " + userId);
                var account = await _accountService.GetAccountByLineBotUserId(userId);
                if (account == null)
                {
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
                var account = await _accountService.GetAccountByNonce(evt.Link!.Nonce);
                if (account != null)
                {
                    account.LineBotUserId = evt.Source.UserId;
                    account.Nonce = string.Empty;
                    await _accountService.UpdateAccount(account);
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
        return Ok();
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
