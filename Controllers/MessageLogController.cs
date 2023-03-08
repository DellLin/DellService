[ApiController]
[Route("api/[controller]")]
public class MessageLogController : ControllerBase
{
    private readonly ILogger<MessageLogController> _logger;
    private readonly MessageLogService _messageLogService;

    public MessageLogController(
        ILogger<MessageLogController> logger,
        MessageLogService messageLogService
    )
    {
        _logger = logger;
        _messageLogService = messageLogService;
    }
    [HttpGet]
    public async Task<IList<MessageLog>> Get()
    {
        try
        {
            return await _messageLogService.GetMessageList();
        }
        catch
        {

            throw;
        }
    }
}
