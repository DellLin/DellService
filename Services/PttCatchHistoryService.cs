
public class PttCatchHistoryService
{
    private readonly CosmosDBService _cosmosDBService;

    public PttCatchHistoryService(CosmosDBService cosmosDBService)
    {
        _cosmosDBService = cosmosDBService;
    }
    public async Task<List<PttCatchHistory>> SearchPttCatchHistoryByUserIdAsync(string userId)
    {
        try
        {
            var q = _cosmosDBService.PttSpiderCatchContainer.GetItemLinqQueryable<PttCatchHistory>();
            q = (IOrderedQueryable<PttCatchHistory>)q.Where(t => t.UserId == userId);
            var iterator = q.ToFeedIterator();
            var results = await iterator.ReadNextAsync();
            return results.ToList();
        }
        catch (System.Exception)
        {

            throw;
        }
    }
}
