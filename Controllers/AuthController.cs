

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IWebHostEnvironment _webHostEnvironment;
    private readonly AccountService _accountService;
    private readonly TokenService _tokenService;
    private readonly LineLoginService _lineLoginService;
    private readonly IConfiguration _configuration;

    public AuthController(
        IWebHostEnvironment webHostEnvironment,
        AccountService accountService,
        TokenService tokenService,
        LineLoginService lineLoginService,
        IConfiguration configuration
    )
    {
        _webHostEnvironment = webHostEnvironment;
        _accountService = accountService;
        _tokenService = tokenService;
        _lineLoginService = lineLoginService;
        _configuration = configuration;
    }
    [HttpGet("CheckLogin")]
    public bool CheckLogin()
    {
        try
        {
            return User.Identity?.IsAuthenticated ?? false;
        }
        catch (System.Exception)
        {

            throw;
        }
    }

    [Authorize]
    [HttpPost("RefreshToken")]
    public async Task<bool> RefreshToken()
    {
        try
        {
            var result = false;
            var accessToken = Request.Cookies["AccessToken"];
            var refreshToken = Request.Cookies["RefreshToken"];
            var principal = _tokenService.GetPrincipalFromExpiredToken(accessToken ?? "");

            var userId = principal?.Identity?.Name;
            var account = await _accountService.GetAccount(userId ?? "");
            if (account != null && account.RefreshToken == refreshToken)
            {
                accessToken = _tokenService.GenerateToken(account);
                refreshToken = Guid.NewGuid().ToString();
                Response.Cookies.Append("AccessToken", accessToken);
                Response.Cookies.Append("RefreshToken", refreshToken);
            }
            return result;
        }
        catch (System.Exception)
        {

            throw;
        }
    }
}
