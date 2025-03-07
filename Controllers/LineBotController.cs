using DellService.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace DellService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LineBotController : ControllerBase
    {
        private readonly LineBotService _lineBotService;
        private readonly AccountService _accountService;
        public LineBotController(LineBotService lineBotService,
        AccountService accountService)
        {
            _lineBotService = lineBotService;
            _accountService = accountService;
        }

        [HttpPost]
        public async Task<IActionResult> Post(LineBotEvent lineBotEvent)
        {
            // 解析 JSON 格式的 request body
            Console.WriteLine("Request Body: " + lineBotEvent.ToString());

            foreach (var evt in lineBotEvent.Events)
            {
                if (evt.ReplyToken == null)
                {
                    continue;
                }
                if (evt.Type == "flow")
                {
                    var newAccount = new Account()
                    {
                        LineBotUserId = evt.Source.UserId,
                    };
                    await _accountService.AddAccount(newAccount);
                }
                if (evt.Type == "message")
                {
                    var userId = evt.Source.UserId;
                    Console.WriteLine("User id: " + userId);
                    var account = await _accountService.GetAccountByLineBotUserId(userId);
                    if (account == null)
                    {
                        var newAccount = new Account()
                        {
                            Id = Guid.NewGuid().ToString(),
                            LineBotUserId = userId,
                        };
                        await _accountService.AddAccount(newAccount);
                    }
                    var accessToken = await _lineBotService.GetAccessTokenAsync();
                    await _lineBotService.ReplyMessageAsync(evt.ReplyToken.ToString()!, accessToken, userId!);
                }
            }

            // Handle the POST request here
            return Ok();
        }
    }
}