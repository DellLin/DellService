public class LineBotService
{
    private readonly IConfiguration _configuration;
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly ILogger<LineBotService> _logger;
    public LineBotService(IConfiguration configuration, IHttpClientFactory httpClientFactory, ILogger<LineBotService> logger)
    {
        _configuration = configuration;
        _httpClientFactory = httpClientFactory;
        _logger = logger;
    }


    public async Task<string> GetAccessTokenAsync()
    {
        var clientId = _configuration.GetSection("LINE_BOT_CLIENT_ID").Value;
        var clientSecret = _configuration.GetSection("LINE_BOT_CLIENT_SECRET").Value;

        var data = new FormUrlEncodedContent(new[]
        {
                    new KeyValuePair<string, string>("grant_type", "client_credentials"),
                    new KeyValuePair<string, string>("client_id", clientId),
                    new KeyValuePair<string, string>("client_secret", clientSecret)
                });
        var httpClient = _httpClientFactory.CreateClient("LineBot");
        var response = await httpClient.PostAsync("https://api.line.me/oauth2/v3/token", data);

        var responseContent = await response.Content.ReadAsStringAsync();
        var json = JObject.Parse(responseContent);
        return json["access_token"]!.ToString();

    }

    public async Task<JObject> ReplyMessageAsync(string replyToken, string accessToken, string message)
    {
        var url = "https://api.line.me/v2/bot/message/reply";

        using (var request = new HttpRequestMessage(HttpMethod.Post, url))
        {
            request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

            var data = new
            {
                replyToken = replyToken,
                messages = new[]
                {
                    new
                    {
                        type = "text",
                        text = message
                    }
                }
            };

            request.Content = new StringContent(JObject.FromObject(data).ToString(), System.Text.Encoding.UTF8, "application/json");
            var httpClient = _httpClientFactory.CreateClient("LineBot");

            var response = await httpClient.SendAsync(request);
            var responseContent = await response.Content.ReadAsStringAsync();
            if (response.IsSuccessStatusCode)
            {
                return JObject.Parse(responseContent);
            }
            else
            {
                _logger.LogError("Failed to reply message: {0}", responseContent);
            }
            return JObject.Parse(responseContent);
        }


    }

    public async Task<JObject> PushMessageAsync(LineMessage messages, string accessToken)
    {
        var url = "https://api.line.me/v2/bot/message/push";
        var retryKey = Guid.NewGuid().ToString();
        var random = new Random();

        for (int i = 0; i < 3; i++)
        {
            using (var request = new HttpRequestMessage(HttpMethod.Post, url))
            {
                request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                request.Headers.Add("X-Line-Retry-Key", retryKey);
                request.Content = new StringContent(JsonConvert.SerializeObject(messages), System.Text.Encoding.UTF8, "application/json");
                var httpClient = _httpClientFactory.CreateClient("LineBot");
                var response = await httpClient.SendAsync(request);
                var responseContent = await response.Content.ReadAsStringAsync();
                if (response.IsSuccessStatusCode)
                {
                    return JObject.Parse(responseContent);
                }
                {
                    _logger.LogError("Failed to push message: {0}", responseContent);
                }
                await Task.Delay(random.Next(0, 200));
            }
        }
        throw new Exception("Failed to push message after 3 attempts.");
    }

    public async Task<string> GenerateLinkTokenAsync(string userId, string accessToken)
    {
        var url = $"https://api.line.me/v2/bot/user/{userId}/linkToken";
        using (var client = new HttpClient())
        {
            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

            var response = await client.PostAsync(url, null);
            response.EnsureSuccessStatusCode();

            var responseContent = await response.Content.ReadAsStringAsync();
            var json = JObject.Parse(responseContent);
            return json["linkToken"]!.ToString();
        }
    }
}
