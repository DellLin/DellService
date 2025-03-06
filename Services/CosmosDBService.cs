
public class CosmosDBService
{
    private readonly CosmosClient _cosmosClient;
    private readonly IConfiguration _configuration;
    private readonly Container _accountContainer;
    private readonly Container _messageLogContainer;
    private readonly Container _pttSpiderContainer;
    private readonly Container _pttSpiderCatchContainer;

    public CosmosDBService(IConfiguration configuration)
    {
        _configuration = configuration;
        string databaseName = _configuration.GetSection("CosmosDb:DatabaseName").Value;
        string account = _configuration.GetSection("COSMOS_ENDPOINT").Value ?? "";
        string key = _configuration.GetSection("COSMOS_KEY").Value ?? "";
        this._cosmosClient = new Microsoft.Azure.Cosmos.CosmosClient(account, key);
        this._accountContainer = _cosmosClient.GetContainer(databaseName, "account");
        this._messageLogContainer = _cosmosClient.GetContainer(databaseName, "messageLog");
        this._pttSpiderContainer = _cosmosClient.GetContainer(databaseName, "PttSpider");
        this._pttSpiderCatchContainer = _cosmosClient.GetContainer(databaseName, "PttSpiderCatch");
    }

    public Container AccountContainer => _accountContainer;

    public Container MessageLogContainer => _messageLogContainer;

    public Container PttSpiderContainer => _pttSpiderContainer;

    public Container PttSpiderCatchContainer => _pttSpiderCatchContainer;
}
