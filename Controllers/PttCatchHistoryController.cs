
[Authorize]
[ApiController]
[Route("api/[controller]")]
public class PttCatchHistoryController : ControllerBase
{
    private readonly PttCatchHistoryService _pttCatchHistoryService;

    public PttCatchHistoryController(PttCatchHistoryService pttCatchHistoryService)
    {
        _pttCatchHistoryService = pttCatchHistoryService;
    }
    [HttpGet]
    public async Task<List<PttCatchHistory>> GetAsync()
    {
        try
        {
            return await _pttCatchHistoryService.SearchPttCatchHistoryByUserIdAsync(User.Identity?.Name ?? "");
        }
        catch (System.Exception)
        {

            throw;
        }
    }
}
