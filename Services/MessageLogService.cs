using Microsoft.Azure.Cosmos.Linq;

public class MessageLogService
{
    private readonly CosmosDBService _cosmosDBService;

    public MessageLogService(
        CosmosDBService cosmosDBService
        )
    {
        _cosmosDBService = cosmosDBService;
    }
    public async Task<MessageLog> AddMessage(MessageLog account)
    {
        try
        {
            MessageLog createdItem = await _cosmosDBService.MessageLogContainer.UpsertItemAsync<MessageLog>(
                item: account,
                partitionKey: new PartitionKey(account.Id)

            );
            return createdItem;
        }
        catch (System.Exception)
        {
            // _logger.LogError("AddAccount error\r\n{ex}", ex.ToString());
            throw;
        }
    }
    public async Task<IList<MessageLog>> GetMessageList()
    {
        try
        {
            var q = _cosmosDBService.MessageLogContainer.GetItemLinqQueryable<MessageLog>();
            var iterator = q.ToFeedIterator();
            var results = await iterator.ReadNextAsync();
            return results.ToList();
        }
        catch
        {

            throw;
        }
    }
    public async Task<MessageLog> GetMessage(string id)
    {
        try
        {
            MessageLog readItem = await _cosmosDBService.MessageLogContainer.ReadItemAsync<MessageLog>(
                id: id,
                partitionKey: new PartitionKey(id)
            );
            return readItem;
        }
        catch
        {

            throw;
        }
    }
}
