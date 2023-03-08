public class LineNotifyService
{
    private readonly ILogger<LineNotifyService> _logger;
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IConfiguration _configuration;
    private readonly AccountService _accountService;

    private readonly string _clientId = Environment.GetEnvironmentVariable("LINE_NOTIFY_CLIENT_ID") ?? "";
    private readonly string _clientSeret = Environment.GetEnvironmentVariable("LINE_NOTIFY_CLIENT_SERET") ?? "";

    public LineNotifyService(
        ILogger<LineNotifyService> logger,
        IHttpClientFactory httpClientFactory,
        IConfiguration configuration,
        AccountService accountService
    )
    {
        _logger = logger;
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
        _accountService = accountService;
    }
    /// <summary>
    /// 拿 Code 換 Token
    /// </summary>
    /// <param name="code">OAuth Code</param>
    /// <param name="request">HttpRequest</param>
    /// <param name="account">Account</param>
    /// <returns></returns>
    public async Task<bool> GetAccessToken(string code, HttpRequest request)
    {
        try
        {
            if (_clientId == null || _clientSeret == null)
                throw new Exception("Environment Variable [CLIENT_ID] is null");
            var param = new Dictionary<string, string>
            {
                ["grant_type"] = "authorization_code",
                ["code"] = code,
                ["redirect_uri"] = new Uri($"{request.Scheme}://{request.Host.Value.Replace("localhost", "127.0.0.1")}/{_configuration.GetValue<string>("LineNotifyCallBackPath")}").ToString(),
                ["client_id"] = _clientId,
                ["client_secret"] = _clientSeret,
            };
            var httpClient = _httpClientFactory.CreateClient("LineNotify");
            using var httpRequest = new HttpRequestMessage(HttpMethod.Post, "https://notify-bot.line.me/oauth/token");
            httpRequest.Content = new FormUrlEncodedContent(param);
            using var httpResponseMessage = await httpClient.SendAsync(httpRequest);
            System.Console.WriteLine(await httpResponseMessage.Content.ReadAsStringAsync());
            if (httpResponseMessage.IsSuccessStatusCode)
            {
                var lineNotifyAuthString = await httpResponseMessage.Content.ReadAsStringAsync();
                var lineNotifyAuth = JsonConvert.DeserializeObject<LineNotifyAuth>(lineNotifyAuthString);
                var accessToken = request.Cookies["AccessToken"];
                IJsonSerializer serializer = new JsonNetSerializer();
                IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder();
                IJwtDecoder decoder = new JwtDecoder(serializer, urlEncoder);
                var json = decoder.Decode(accessToken);
                System.Console.WriteLine(json);
                var lineIdToken = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
                var userId = lineIdToken!["sub"];
                var account = await _accountService.GetAccount(userId);
                account.LineNotifyAccessToken = lineNotifyAuth?.AccessToken;
                await _accountService.UpdateAccount(account);
                return true;
            }
            else
            {
                return false;
            }
        }
        catch
        {
            throw;
        }
    }
    public async Task<bool> GetState(Account account)
    {
        try
        {
            var httpClient = _httpClientFactory.CreateClient("LineNotify");
            using var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, "https://notify-api.line.me/api/status");
            httpRequestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", account.LineNotifyAccessToken);
            using var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);
            System.Console.WriteLine(httpResponseMessage.StatusCode);
            if (httpResponseMessage.IsSuccessStatusCode)
            {
                var lineNotifyStateString = await httpResponseMessage.Content.ReadAsStringAsync();
                var lineNotifyState = JsonConvert.DeserializeObject<LineNotufyState>(lineNotifyStateString);
                return lineNotifyState?.Status == 200;
            }
            // 錯誤
            else
            {
                return false;
            }
        }
        catch
        {

            throw;
        }
    }
    public async Task<bool> Revoke(Account account)
    {
        try
        {
            var httpClient = _httpClientFactory.CreateClient("LineNotify");
            using var httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, "https://notify-api.line.me/api/revoke");
            httpRequestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", account.LineNotifyAccessToken);
            using var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);
            System.Console.WriteLine(httpResponseMessage.StatusCode);
            if (httpResponseMessage.IsSuccessStatusCode)
            {
                var lineNotifyStateString = await httpResponseMessage.Content.ReadAsStringAsync();
                var lineNotifyState = JsonConvert.DeserializeObject<LineNotufyState>(lineNotifyStateString);
                return lineNotifyState?.Status == 200;
            }
            // AccessToken 錯誤
            else
            {
                return false;
            }
        }
        catch
        {

            throw;
        }
    }
    public async Task<bool> SendMessagetoSelf(Account account, string message)
    {
        try
        {
            var httpClient = _httpClientFactory.CreateClient("LineNotify");
            using var httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, "https://notify-api.line.me/api/notify");
            httpRequestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", account.LineNotifyAccessToken);
            var param = new Dictionary<string, string>
            {
                ["message"] = message,
            };
            httpRequestMessage.Content = new FormUrlEncodedContent(param);
            using var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);
            System.Console.WriteLine(httpResponseMessage.StatusCode);
            if (httpResponseMessage.IsSuccessStatusCode)
            {
                var lineNotifyStateString = await httpResponseMessage.Content.ReadAsStringAsync();
                var lineNotifyState = JsonConvert.DeserializeObject<LineNotufyState>(lineNotifyStateString);
                return lineNotifyState?.Status == 200;
            }
            // AccessToken 錯誤
            else
            {
                return false;
            }
        }
        catch
        {

            throw;
        }
    }
}
