
[ApiController]
[Route("api/[controller]")]
public class LineLoginController : ControllerBase
{
    private readonly ILogger<LineLoginController> _logger;
    private readonly AccountService _accountService;
    private readonly LineLoginService _lineLoginService;
    private readonly IConfiguration _configuration;
    private readonly IWebHostEnvironment _webHostEnvironment;
    private readonly AutoMapperService _autoMapperService;

    public LineLoginController(
        ILogger<LineLoginController> logger,
        AccountService accountService,
        LineLoginService lineLoginService,
        IConfiguration configuration,
        IWebHostEnvironment webHostEnvironment,
        AutoMapperService autoMapperService
        )
    {
        _logger = logger;
        _accountService = accountService;
        _lineLoginService = lineLoginService;
        _configuration = configuration;
        _webHostEnvironment = webHostEnvironment;
        _autoMapperService = autoMapperService;
    }
    [HttpGet("LineLogin")]
    public string LineLogin()
    {
        try
        {
            var responeType = "code";
            var client_id = _configuration.GetSection("LINE_CLIENT_ID").Value;
            var state = "123123";
            var scope = "openid email profile";
            var redirect_uri = $"{Request.Scheme}://{Request.Host.Value}/{_configuration.GetValue<string>("LineLoginCallBackPath")}";
            System.Console.WriteLine(redirect_uri);
            var redirect = new Uri($@"https://access.line.me/oauth2/v2.1/authorize?response_type={responeType}&client_id={client_id}&state={state}&scope={scope}&redirect_uri={redirect_uri}");
            System.Console.WriteLine(redirect.ToString());
            return redirect.ToString();
        }
        catch
        {
            throw;
        }
    }
    [HttpGet("LineLoginCallBack")]

    public async Task<IActionResult> LineLoginCallBack(string code)
    {
        try
        {
            string successRedirectPath = "/main/line/line-notify";
            string errorRedirectPath = "/login";
            var redirectUri = new Uri(_webHostEnvironment.IsDevelopment() ? "https://localhost:44488" : $"{Request.Scheme}://{Request.Host}");
            if (await _lineLoginService.GetAccessToken(code, Request, Response))
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
    [HttpGet("SyncLineProfile")]
    public async Task<AccountViewModel?> SyncLineProfile()
    {
        try
        {
            var userId = User.Identity?.Name ?? "";
            System.Console.WriteLine(userId);
            var account = await _accountService.GetAccount(userId);
            System.Console.WriteLine(JsonConvert.SerializeObject(account));

            var newAccount = await _lineLoginService.SyncProfile(account);
            return _autoMapperService.Mapper.Map<AccountViewModel>(newAccount);
        }
        catch
        {

            throw;
        }
    }
}
