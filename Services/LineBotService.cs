using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;

namespace DellService.Services
{
    public class LineBotService
    {
        private readonly IConfiguration _configuration;

        public LineBotService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<string> GetAccessTokenAsync()
        {
            var clientId = _configuration.GetSection("CLIENT_ID").Value;
            var clientSecret = _configuration.GetSection("CLIENT_SECRET").Value;
            Console.WriteLine($"client_id: {clientId}");
            Console.WriteLine($"client_secret: {clientSecret}");

            using (var client = new HttpClient())
            {
                // client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/x-www-form-urlencoded"));

                var data = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("grant_type", "client_credentials"),
                    new KeyValuePair<string, string>("client_id", clientId),
                    new KeyValuePair<string, string>("client_secret", clientSecret)
                });

                var response = await client.PostAsync("https://api.line.me/oauth2/v3/token", data);

                var responseContent = await response.Content.ReadAsStringAsync();
                var json = JObject.Parse(responseContent);
                return json["access_token"]!.ToString();
            }
        }

        public async Task<JObject> ReplyMessageAsync(string replyToken, string accessToken, string message)
        {
            var url = "https://api.line.me/v2/bot/message/reply";
            var headers = new HttpRequestMessage(HttpMethod.Post, url);
            headers.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            headers.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

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

            using (var client = new HttpClient())
            {
                var content = new StringContent(JObject.FromObject(data).ToString(), System.Text.Encoding.UTF8, "application/json");
                var response = await client.PostAsync(url, content);
                response.EnsureSuccessStatusCode();

                var responseContent = await response.Content.ReadAsStringAsync();
                return JObject.Parse(responseContent);
            }
        }
    }
}
