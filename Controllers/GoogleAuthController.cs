[ApiController]
[Route("api/[controller]")]
public class GoogleAuthController : ControllerBase
{
    private readonly ILogger<GoogleAuthController> _logger;
    private readonly IConfiguration _configuration;
    private readonly IWebHostEnvironment _webHostEnvironment;
    private readonly GoogleAuthService _googleAuthService;
    private readonly IHostEnvironment _hostEnvironment;

    public GoogleAuthController(
        ILogger<GoogleAuthController> logger,
        IConfiguration configuration,
        IWebHostEnvironment webHostEnvironment,
        GoogleAuthService googleAuthService,
        IHostEnvironment hostEnvironment
        )
    {
        _logger = logger;
        _configuration = configuration;
        _webHostEnvironment = webHostEnvironment;
        _googleAuthService = googleAuthService;
        _hostEnvironment = hostEnvironment;
    }
    [HttpGet]
    public string Get()
    {
        try
        {
            var responeType = "code";
            var client_id = _configuration.GetSection("GOOGLE_AUTH_CLIENT_ID").Value;
            var state = "123123";
            var scope = "profile email openid";
            var access_type = "offline";
            var redirect_uri = $"{Request.Scheme}://{Request.Host.Value}/{_configuration.GetValue<string>("GoogleAuthCallBackPath")}";
            System.Console.WriteLine(redirect_uri);
            var redirect = new Uri($@"https://accounts.google.com/o/oauth2/v2/auth?access_type={access_type}&response_type={responeType}&client_id={client_id}&state={state}&scope={scope}&redirect_uri={redirect_uri}");
            System.Console.WriteLine(redirect.ToString());
            return redirect.ToString();
        }
        catch
        {
            throw;
        }
    }
    [HttpGet("CallBack")]

    public async Task<IActionResult> CallBack(string code, string? error)
    {
        try
        {
            string successRedirectPath = "/main/line/line-notify";
            string errorRedirectPath = "/login";
            var redirectUri = new Uri(_webHostEnvironment.IsDevelopment() ? "https://localhost:44488" : $"{Request.Scheme}://{Request.Host}");
            if (await _googleAuthService.GetAccessToken(code, Request, Response))
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
}
