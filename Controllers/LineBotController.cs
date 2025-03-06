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
        public async Task<IActionResult> Post([FromBody] JObject value)
        {
            // 解析 JSON 格式的 request body
            Console.WriteLine("Request Body: " + value.ToString());

            var userId = value["events"]?[0]?["source"]?["userId"]?.ToString();
            Console.WriteLine("User id: " + userId);
            var account = await _accountService.GetAccount(User.Identity?.Name ?? "");
            if (account.LineBotUserId == null)
            {
                account.LineBotUserId = userId;
                await _accountService.UpdateAccount(account);
            }
            var accessToken = await _lineBotService.GetAccessTokenAsync();
            await _lineBotService.ReplyMessageAsync(value["events"]?[0]?["replyToken"]?.ToString()!, accessToken, userId!);
            // Handle the POST request here
            return Ok();
        }
    }
}