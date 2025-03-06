
public class GoogleAuthService
{
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IConfiguration _configuration;
    private readonly AccountService _accountService;
    private readonly TokenService _tokenService;

    public GoogleAuthService(
        IHttpClientFactory httpClientFactory,
        IConfiguration configuration,
        AccountService accountService,
        TokenService tokenService
    )
    {
        _httpClientFactory = httpClientFactory;
        _configuration = configuration;
        _accountService = accountService;
        _tokenService = tokenService;
    }
    /// <summary>
    /// 拿 Code 換 Token
    /// </summary>
    /// <param name="code">OAuth Code</param>
    /// <param name="Request">HttpRequest</param>
    /// <param name="Response">Response</param>
    /// <returns></returns>
    public async Task<bool> GetAccessToken(string code, HttpRequest Request, HttpResponse Response)
    {
        try
        {
            var clientId = _configuration.GetSection("GOOGLE_AUTH_CLIENT_ID").Value;
            var clientSeret = _configuration.GetSection("GOOGLE_AUTH_CLIENT_SERET").Value;
            if (clientId == null || clientSeret == null)
                throw new Exception("Environment Variable [CLIENT_ID] is null");
            var httpRequestMessage = new HttpRequestMessage(HttpMethod.Post, "https://oauth2.googleapis.com/token");

            var param = new Dictionary<string, string>
            {
                ["grant_type"] = "authorization_code",
                ["code"] = code,
                ["redirect_uri"] = new Uri($"{Request.Scheme}://{Request.Host.Value.Replace("localhost", "127.0.0.1")}/{_configuration.GetValue<string>("GoogleAuthCallBackPath")}").ToString(),
                ["client_id"] = clientId,
                ["client_secret"] = clientSeret,
            };
            httpRequestMessage.Content = new StringContent(JsonConvert.SerializeObject(param), Encoding.UTF8, "application/json"); ;
            var httpClient = _httpClientFactory.CreateClient("Line");
            using var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);
            System.Console.WriteLine(await httpResponseMessage.Content.ReadAsStringAsync());

            if (httpResponseMessage.IsSuccessStatusCode)
            {
                var googleAuthString = await httpResponseMessage.Content.ReadAsStringAsync();
                var googleAuth = JsonConvert.DeserializeObject<GoogleAuth>(googleAuthString);
                IJsonSerializer serializer = new JsonNetSerializer();
                IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder();
                IJwtDecoder decoder = new JwtDecoder(serializer, urlEncoder);
                var json = decoder.Decode(googleAuth?.IdToken);
                System.Console.WriteLine(googleAuth?.IdToken);
                System.Console.WriteLine(json);
                var googleIdToken = JsonConvert.DeserializeObject<GoogleIdToken>(json);

                var account = await _accountService.GetAccountByGoogleId(googleIdToken?.Sub ?? "");
                account ??= await _accountService.GetAccountByEmail(googleIdToken?.Email ?? "");
                var refreshToken = Guid.NewGuid().ToString();
                if (account == null)
                {
                    account = new Account()
                    {
                        Id = Guid.NewGuid().ToString(),
                        Name = googleIdToken?.Name,
                        Email = googleIdToken?.Email,
                        Picture = googleIdToken?.Picture,
                        GoogleId = googleIdToken?.Sub,
                        GoogleName = googleIdToken?.Name,
                        GooglePicture = googleIdToken?.Picture,
                        GoogleAccessToken = googleAuth?.AccessToken,
                        GoogleRefreshToken = googleAuth?.RefreshToken,
                        RefreshToken = refreshToken,
                    };
                    await _accountService.AddAccount(account);
                }
                else
                {
                    account.Name = googleIdToken?.Name;
                    account.Email = googleIdToken?.Email;
                    account.Picture = googleIdToken?.Picture;
                    account.GoogleName = googleIdToken?.Name;
                    account.GooglePicture = googleIdToken?.Picture;
                    account.GoogleAccessToken = googleAuth?.AccessToken;
                    account.GoogleRefreshToken = googleAuth?.RefreshToken;
                    account.RefreshToken = refreshToken;
                    await _accountService.UpdateAccount(account);
                    System.Console.WriteLine("Update Finish");
                }
                var accessToken = _tokenService.GenerateToken(account);

                Response.Cookies.Append("AccessToken", accessToken ?? "");
                Response.Cookies.Append("RefreshToken", refreshToken ?? "");
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
}
