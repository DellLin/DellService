

public class PttSpiderService
{
    private readonly CosmosDBService _cosmosDBService;

    public PttSpiderService(CosmosDBService cosmosDBService)
    {
        _cosmosDBService = cosmosDBService;
    }
    public async Task<List<PttSearchRule>> SearchPttSearchRuleByUserIdAsync(string id)
    {
        try
        {
            var q = _cosmosDBService.PttSpiderContainer.GetItemLinqQueryable<PttSearchRule>();
            q = (IOrderedQueryable<PttSearchRule>)q.Where(t => t.UserId == id);
            var iterator = q.ToFeedIterator();
            var results = await iterator.ReadNextAsync();
            return results.ToList();
        }
        catch (System.Exception)
        {

            throw;
        }
    }
    public async Task<PttSearchRule> InsertPttSearchRuleAsync(PttSearchRule pttSearchRule, string userId)
    {
        try
        {
            pttSearchRule.Id = Guid.NewGuid().ToString();
            pttSearchRule.UserId = userId;
            return await _cosmosDBService.PttSpiderContainer.CreateItemAsync(pttSearchRule);
        }
        catch (System.Exception)
        {
            throw;
        }
    }
    public async Task<PttSearchRule> UpdatePttSearchRuleAsync(PttSearchRule pttSearchRule)
    {
        try
        {
            return await _cosmosDBService.PttSpiderContainer.UpsertItemAsync(pttSearchRule);
        }
        catch (System.Exception)
        {
            throw;
        }
    }
    public async Task<bool> DeletePttSearchRuleAsync(string id)
    {
        try
        {
            var respond = await _cosmosDBService.PttSpiderContainer.DeleteItemAsync<PttSearchRule>(id, new PartitionKey(id));
            return respond.StatusCode == System.Net.HttpStatusCode.OK;
        }
        catch (System.Exception)
        {
            throw;
        }
    }

}
