
[Authorize]
[ApiController]
[Route("api/[controller]")]
public class PttSpiderController : ControllerBase
{
    private readonly PttSpiderService _pttSpiderService;

    public PttSpiderController(PttSpiderService pttSpiderService)
    {
        _pttSpiderService = pttSpiderService;
    }
    [HttpGet]
    public async Task<List<PttSearchRule>> GetAsync()
    {
        try
        {
            return await _pttSpiderService.SearchPttSearchRuleByUserIdAsync(User.Identity?.Name ?? "");
        }
        catch (System.Exception)
        {

            throw;
        }
    }
    [HttpPost]
    public async Task<PttSearchRule> PostAsync(PttSearchRule pttSearchRule)
    {
        try
        {
            return await _pttSpiderService.InsertPttSearchRuleAsync(pttSearchRule, User.Identity?.Name ?? "");
        }
        catch (System.Exception)
        {

            throw;
        }
    }
    [HttpPut]
    public async Task<PttSearchRule> PutAsync(PttSearchRule pttSearchRule)
    {
        try
        {
            return await _pttSpiderService.UpdatePttSearchRuleAsync(pttSearchRule);
        }
        catch (System.Exception)
        {

            throw;
        }
    }
    [HttpDelete]
    public async Task<bool> DeleteAsync(PttSearchRule pttSearchRule)
    {
        try
        {
            System.Console.WriteLine("pttSearchRule.Id: " + pttSearchRule.Id);
            return await _pttSpiderService.DeletePttSearchRuleAsync(pttSearchRule.Id ?? "");
        }
        catch (System.Exception)
        {

            throw;
        }
    }
}
