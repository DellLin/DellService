[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    private readonly ILogger<AccountController> _logger;
    private readonly AccountService _accountService;
    private readonly AutoMapperService _autoMapperService;

    public AccountController(
        ILogger<AccountController> logger,
        AccountService accountService,
        AutoMapperService autoMapperService
        )
    {
        _logger = logger;
        _accountService = accountService;
        _autoMapperService = autoMapperService;
    }
    [Authorize]
    [HttpGet]
    public async Task<AccountViewModel> Get()
    {
        try
        {
            var userId = User.Identity?.Name;
            System.Console.WriteLine(userId);
            var account = await _accountService.GetAccount(userId ?? "");
            return _autoMapperService.Mapper.Map<AccountViewModel>(account);
        }
        catch (System.Exception)
        {

            throw;
        }
    }
    [HttpGet("All")]
    public async Task<IList<AccountViewModel>> GetAll()
    {
        try
        {
            var accountList = await _accountService.GetAccountList();
            return _autoMapperService.Mapper.Map<IList<AccountViewModel>>(accountList);
        }
        catch (System.Exception)
        {

            throw;
        }
    }
}
