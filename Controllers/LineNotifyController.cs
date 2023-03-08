
[ApiController]
[Route("api/[controller]")]
public class LineNotifyController : ControllerBase
{
    private readonly ILogger<LineNotifyController> _logger;
    private readonly AccountService _accountService;
    private readonly IConfiguration _configuration;
    private readonly IWebHostEnvironment _webHostEnvironment;
    private readonly LineNotifyService _lineNotifyService;
    private readonly MessageLogService _messageLogService;

    public LineNotifyController(
        ILogger<LineNotifyController> logger,
        AccountService accountService,
        IConfiguration configuration,
        IWebHostEnvironment webHostEnvironment,
        LineNotifyService lineNotifyService,
        MessageLogService messageLogService
    )
    {
        _logger = logger;
        _accountService = accountService;
        _configuration = configuration;
        _webHostEnvironment = webHostEnvironment;
        _lineNotifyService = lineNotifyService;
        _messageLogService = messageLogService;
    }
    [HttpGet("LineNotifyAuth")]
    public string LineNotifyAuth()
    {
        try
        {
            var responeType = "code";
            var client_id = Environment.GetEnvironmentVariable("LINE_NOTIFY_CLIENT_ID");
            var state = "123123";
            var scope = "notify";
            var redirect_uri = $"{Request.Scheme}://{Request.Host.Value.Replace("localhost", "127.0.0.1")}/{_configuration.GetValue<string>("LineNotifyCallBackPath")}";
            System.Console.WriteLine(redirect_uri);
            var redirect = new Uri($@"https://notify-bot.line.me/oauth/authorize?response_type={responeType}&client_id={client_id}&state={state}&scope={scope}&redirect_uri={redirect_uri}");
            System.Console.WriteLine(redirect.ToString());
            return redirect.ToString();
        }
        catch
        {

            throw;
        }
    }

    [HttpGet("LineNotifyCallBack")]
    public async Task<IActionResult> LineNotifyCallBack(string code)
    {
        try
        {
            string successRedirectPath = "/line/line-notify";
            string errorRedirectPath = "/line/line-notify";
            var redirectUri = new Uri(_webHostEnvironment.IsDevelopment() ? "https://127.0.0.1:44488" : $"{Request.Scheme}://{Request.Host}");
            if (await _lineNotifyService.GetAccessToken(code, Request))
            {
                redirectUri = new Uri(redirectUri, successRedirectPath);
            }
            else
            {
                redirectUri = new Uri(redirectUri, errorRedirectPath);
            }
            return Redirect(redirectUri.ToString());
        }
        catch
        {
            throw;
        }

    }
    [Authorize]
    [HttpGet("GetState")]
    public async Task<bool> GetState()
    {
        try
        {
            var account = await _accountService.GetAccount(User.Identity?.Name ?? "");
            System.Console.WriteLine("GetAccount Finish");
            return await _lineNotifyService.GetState(account);

        }
        catch
        {
            throw;
        }
    }
    [Authorize]
    [HttpGet("Revoke")]
    public async Task<bool> Revoke()
    {
        try
        {
            var account = await _accountService.GetAccount(User.Identity?.Name ?? "");
            return await _lineNotifyService.Revoke(account);
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
            return await _lineNotifyService.SendMessagetoSelf(account, message);
        }
        catch
        {
            throw;
        }
    }

    [HttpPost("SendMessagetoAll")]
    public async Task<bool> SendMessagetoAll(string message)
    {
        try
        {
            var accountList = await _accountService.GetAccountList();
            foreach (var account in accountList)
            {
                await _lineNotifyService.SendMessagetoSelf(account, message);
            }
            await _messageLogService.AddMessage(new MessageLog
            {
                Id = Guid.NewGuid().ToString(),
                Message = message
            });
            return true;
        }
        catch
        {
            throw;
        }
    }
}
