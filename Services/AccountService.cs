using Microsoft.Azure.Cosmos.Linq;

public class AccountService
{
    private readonly CosmosDBService _cosmosDBService;

    public AccountService(
        CosmosDBService cosmosDBService
        )
    {
        _cosmosDBService = cosmosDBService;
    }
    public async Task<Account> AddAccount(Account account)
    {
        try
        {
            Account createdItem = await _cosmosDBService.AccountContainer.UpsertItemAsync<Account>(
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
    public async Task<IList<Account>> GetAccountList()
    {
        try
        {
            var q = _cosmosDBService.AccountContainer.GetItemLinqQueryable<Account>();
            var iterator = q.ToFeedIterator();
            var results = await iterator.ReadNextAsync();
            return results.ToList();
        }
        catch
        {

            throw;
        }
    }
    public async Task<Account> GetAccount(string id)
    {
        try
        {
            Account readItem = await _cosmosDBService.AccountContainer.ReadItemAsync<Account>(
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

    public async Task<Account?> GetAccountByEmail(string email)
    {
        try
        {
            var query = new QueryDefinition(
                query: "SELECT * FROM account p WHERE p.email = @key"
            )
        .WithParameter("@key", email);

            using FeedIterator<Account> feed = _cosmosDBService.AccountContainer.GetItemQueryIterator<Account>(
                queryDefinition: query
            );

            while (feed.HasMoreResults)
            {
                FeedResponse<Account> response = await feed.ReadNextAsync();
                return response.FirstOrDefault();
            }
            return null;
        }
        catch
        {
            throw;
        }
    }
    public async Task<Account?> GetAccountByLineId(string lineId)
    {
        try
        {
            var query = new QueryDefinition(
                query: "SELECT * FROM account p WHERE p.lineId = @key"
            )
        .WithParameter("@key", lineId);

            using FeedIterator<Account> feed = _cosmosDBService.AccountContainer.GetItemQueryIterator<Account>(
                queryDefinition: query
            );

            while (feed.HasMoreResults)
            {
                FeedResponse<Account> response = await feed.ReadNextAsync();
                return response.FirstOrDefault();
            }
            return null;
        }
        catch
        {

            throw;
        }
    }
    public async Task<Account?> GetAccountByGoogleId(string googleId)
    {
        try
        {
            var query = new QueryDefinition(
                query: "SELECT * FROM account p WHERE p.googleId = @key"
            )
        .WithParameter("@key", googleId);

            using FeedIterator<Account> feed = _cosmosDBService.AccountContainer.GetItemQueryIterator<Account>(
                queryDefinition: query
            );

            while (feed.HasMoreResults)
            {
                FeedResponse<Account> response = await feed.ReadNextAsync();
                return response.FirstOrDefault();
            }
            return null;
        }
        catch
        {

            throw;
        }
    }
    public async Task<Account?> GetAccountByLineBotUserId(string lineBotUserId)
    {
        try
        {
            var query = new QueryDefinition(
                query: "SELECT * FROM account p WHERE p.lineBotUserId = @key"
            )
        .WithParameter("@key", lineBotUserId);

            using FeedIterator<Account> feed = _cosmosDBService.AccountContainer.GetItemQueryIterator<Account>(
                queryDefinition: query
            );

            while (feed.HasMoreResults)
            {
                FeedResponse<Account> response = await feed.ReadNextAsync();
                return response.FirstOrDefault();
            }
            return null;
        }
        catch
        {

            throw;
        }
    }
    public async Task<Account?> GetAccountByNonce(string nonce)
    {
        try
        {
            var query = new QueryDefinition(
                query: "SELECT * FROM account p WHERE p.nonce = @key"
            )
            .WithParameter("@key", nonce);

            using FeedIterator<Account> feed = _cosmosDBService.AccountContainer.GetItemQueryIterator<Account>(
                queryDefinition: query
            );

            while (feed.HasMoreResults)
            {
                FeedResponse<Account> response = await feed.ReadNextAsync();
                return response.FirstOrDefault();
            }
            return null;
        }
        catch
        {
            throw;
        }
    }
    public async Task<Account> UpdateAccount(Account account)
    {
        try
        {
            ItemResponse<Account> response = await _cosmosDBService.AccountContainer.PatchItemAsync<Account>(
                id: account.Id,
                partitionKey: new PartitionKey(account.Id),
                patchOperations: new[] {
                PatchOperation.Set("/name", account.Name),
                PatchOperation.Set("/email", account.Email),
                PatchOperation.Set("/refreshToken", account.RefreshToken),
                PatchOperation.Set("/picture", account.Picture),

                }
            );
            response = await _cosmosDBService.AccountContainer.PatchItemAsync<Account>(
                id: account.Id,
                partitionKey: new PartitionKey(account.Id),
                patchOperations: new[] {
                PatchOperation.Set("/lineId", account.LineId),
                PatchOperation.Set("/lineName", account.LineName),
                PatchOperation.Set("/lineLoginAccessToken", account.LineLoginAccessToken),
                PatchOperation.Set("/lineLoginRefreshToken", account.LineLoginRefreshToken),
                PatchOperation.Set("/linePicture", account.LinePicture),
                PatchOperation.Set("/lineNotifyAccessToken", account.LineNotifyAccessToken),
                PatchOperation.Set("/lineBotUserId", account.LineBotUserId),
                PatchOperation.Set("/nonce", account.Nonce),
                }
            );
            response = await _cosmosDBService.AccountContainer.PatchItemAsync<Account>(
                id: account.Id,
                partitionKey: new PartitionKey(account.Id),
                patchOperations: new[] {
                PatchOperation.Set("/googleId", account.GoogleId),
                PatchOperation.Set("/googleName", account.GoogleName),
                PatchOperation.Set("/googleAccessToken", account.GoogleAccessToken),
                PatchOperation.Set("/googleRefreshToken", account.GoogleRefreshToken),
                PatchOperation.Set("/googlePicture", account.GooglePicture),

                }
            );
            return response.Resource;
        }
        catch
        {

            throw;
        }
    }
}
