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
        // 解析 JSON 格式的 request body
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
                if (evt.Message.Text == "註冊")
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
                                    Text = new string[] { "您已註冊" }
                                }
                            }
                        };
                        await _lineBotService.PushMessageAsync(account.LineBotUserId!, alreadLinkMessage, accessToken);
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
                                    AltText = "註冊",
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
                        await _lineBotService.PushMessageAsync(account.LineBotUserId!, message, accessToken);
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
                                Text = new string[] { accessToken }
                            }
                        }
                    };
                    await _lineBotService.PushMessageAsync(account.LineBotUserId!, message, accessToken);
                }
            }
            else if (evt.Type == "accountLink")
            {

            }
        }
        return Ok();
    }
    [HttpGet("Link")]
    public IActionResult Link([FromQuery] string linkToken)
    {
        var nonce = Guid.NewGuid().ToString();
        return Redirect($"https://access.line.me/dialog/bot/accountLink?linkToken={linkToken}&nonce={nonce}");
    }
}
