
public class LineBotService
{
    private readonly IConfiguration _configuration;
    private readonly HttpClient _httpClient;

    public LineBotService(IConfiguration configuration, HttpClient httpClient)
    {
        _configuration = configuration;
        _httpClient = httpClient;
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

        var response = await this._httpClient.PostAsync("https://api.line.me/oauth2/v3/token", data);

        var responseContent = await response.Content.ReadAsStringAsync();
        var json = JObject.Parse(responseContent);
        return json["access_token"]!.ToString();

    }

    public async Task<JObject> ReplyMessageAsync(string replyToken, string accessToken, string message)
    {
        var url = "https://api.line.me/v2/bot/message/reply";
        {
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

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

            var content = new StringContent(JObject.FromObject(data).ToString(), System.Text.Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync(url, content);
            response.EnsureSuccessStatusCode();

            var responseContent = await response.Content.ReadAsStringAsync();
            return JObject.Parse(responseContent);

        }
    }

    public async Task<JObject> PushMessageAsync(string to, string[] messages, string accessToken)
    {
        var url = "https://api.line.me/v2/bot/message/push";
        var retryKey = Guid.NewGuid().ToString();
        var random = new Random();

        for (int i = 0; i < 3; i++)
        {
            _httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
            _httpClient.DefaultRequestHeaders.Add("X-Line-Retry-Key", retryKey);

            var data = new
            {
                to = to,
                messages = messages.Select(message => new { type = "text", text = message }).ToArray()
            };

            var content = new StringContent(JObject.FromObject(data).ToString(), System.Text.Encoding.UTF8, "application/json");
            var response = await _httpClient.PostAsync(url, content);

            if (response.IsSuccessStatusCode)
            {
                var responseContent = await response.Content.ReadAsStringAsync();
                return JObject.Parse(responseContent);
            }
            await Task.Delay(random.Next(0, 200));
        }
        throw new Exception("Failed to push message after 3 attempts.");
    }
}
