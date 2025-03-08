

public class LineLoginService
{
    private readonly ILogger<LineLoginService> _logger;
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IWebHostEnvironment _webHostEnvironment;
    private readonly AccountService _accountService;
    private readonly TokenService _tokenService;
    private readonly IConfiguration _configuration;
    private readonly string _clientId;
    private readonly string _clientSeret;

    public LineLoginService(
        ILogger<LineLoginService> logger,
        IHttpClientFactory httpClientFactory,
        IWebHostEnvironment webHostEnvironment,
        AccountService accountService,
        TokenService tokenService,
        IConfiguration configuration
        )
    {
        _logger = logger;
        _httpClientFactory = httpClientFactory;
        _webHostEnvironment = webHostEnvironment;
        _accountService = accountService;
        _tokenService = tokenService;
        _configuration = configuration;
        _clientId = _configuration.GetValue<string>("LINE_CLIENT_ID");
        _clientSeret = _configuration.GetValue<string>("LINE_CLIENT_SERET");
    }
    /// <summary>
    /// 拿 Code 換 Token
    /// </summary>
    /// <param name="code">OAuth Code</param>
    /// <param name="Request">HttpRequest</param>
    /// <param name="Response">Response</param>
    /// <returns></returns>
    public async Task<bool> GetAccessToken(string code, string nonce, HttpRequest Request, HttpResponse Response)
    {
        try
        {
            if (_clientId == null || _clientSeret == null)
                throw new Exception("Environment Variable [CLIENT_ID] is null");
            var param = new Dictionary<string, string>
            {
                ["grant_type"] = "authorization_code",
                ["code"] = code,
                ["redirect_uri"] = new Uri($"{Request.Scheme}://{Request.Host.Value.Replace("localhost", "127.0.0.1")}/{_configuration.GetValue<string>("LineLoginCallBackPath")}").ToString(),
                ["client_id"] = _clientId,
                ["client_secret"] = _clientSeret,
            };
            var httpClient = _httpClientFactory.CreateClient("Line");
            using var httpResponseMessage = await httpClient.PostAsync("https://api.line.me/oauth2/v2.1/token", new FormUrlEncodedContent(param));
            System.Console.WriteLine(await httpResponseMessage.Content.ReadAsStringAsync());

            if (httpResponseMessage.IsSuccessStatusCode)
            {
                var lineAuthString = await httpResponseMessage.Content.ReadAsStringAsync();
                var lineAuth = JsonConvert.DeserializeObject<LineLoginAuth>(lineAuthString);
                IJsonSerializer serializer = new JsonNetSerializer();
                IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder();
                IJwtDecoder decoder = new JwtDecoder(serializer, urlEncoder);
                var json = decoder.Decode(lineAuth?.IdToken);
                var lineIdToken = JsonConvert.DeserializeObject<LineProfile>(json);
                var account = await _accountService.GetAccountByLineId(lineIdToken?.Sub ?? "");
                account ??= await _accountService.GetAccountByEmail(lineIdToken?.Email ?? "");
                var refreshToken = Guid.NewGuid().ToString();
                if (account == null)
                {
                    account = new Account()
                    {
                        Id = Guid.NewGuid().ToString(),
                        Name = lineIdToken?.Name,
                        Email = lineIdToken?.Email,
                        LineId = lineIdToken?.Sub,
                        Picture = lineIdToken?.Picture,
                        LinePicture = lineIdToken?.Picture,
                        LineLoginAccessToken = lineAuth?.AccessToken,
                        LineLoginRefreshToken = lineAuth?.RefreshToken,
                        RefreshToken = refreshToken,
                        Nooce = nonce
                    };
                    await _accountService.AddAccount(account);
                }
                else
                {
                    account.Name = lineIdToken?.Name;
                    account.Email = lineIdToken?.Email;
                    account.Picture = lineIdToken?.Picture;
                    account.LinePicture = lineIdToken?.Picture;
                    account.LineLoginAccessToken = lineAuth?.AccessToken;
                    account.LineLoginRefreshToken = lineAuth?.RefreshToken;
                    account.RefreshToken = refreshToken;
                    account.Nooce = nonce;
                    await _accountService.UpdateAccount(account);
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
    /// <summary>
    /// 更新 LineProfile
    /// </summary>
    /// <param name="account">User Account</param>
    /// <returns>更新成功回傳更新後的 Account，失敗回傳 Null</returns>
    public async Task<Account?> SyncProfile(Account account)
    {
        try
        {
            var httpClient = _httpClientFactory.CreateClient("Line");
            using var httpRequestMessage = new HttpRequestMessage(HttpMethod.Get, "https://api.line.me/oauth2/v2.1/userinfo");
            httpRequestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", account.LineLoginAccessToken);
            using var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);
            System.Console.WriteLine(httpResponseMessage.StatusCode);
            if (httpResponseMessage.IsSuccessStatusCode)
            {
                var lineProfileString = await httpResponseMessage.Content.ReadAsStringAsync();
                System.Console.WriteLine(lineProfileString);
                var lineProfile = JsonConvert.DeserializeObject<LineProfile>(lineProfileString);
                var refreshToken = Guid.NewGuid().ToString();
                account.LineId = lineProfile!.Sub;
                account.Name = lineProfile.Name;
                account.LinePicture = lineProfile.Picture;
                account.Picture = lineProfile.Picture;
                await _accountService.UpdateAccount(account);
                return account;
            }
            // AccessToken 失效
            else
            {
                // 嘗試 RefreshAccessToken
                var newAccount = await RefreshLineLoginToken(account);
                if (newAccount != null)
                {
                    // Refresh 成功再次更新LineProfile
                    return await SyncProfile(newAccount);
                }
                else
                {
                    return null;
                }
            }

        }
        catch (System.Exception)
        {

            throw;
        }
    }
    /// <summary>
    /// 更新 AccessToken
    /// </summary>
    /// <param name="account">Account</param>
    /// <returns>回傳更新後的 Account</returns>
    public async Task<Account?> RefreshLineLoginToken(Account account)
    {
        try
        {
            var param = new Dictionary<string, string>
            {
                ["grant_type"] = "refresh_token",
                ["refresh_token"] = account.LineLoginRefreshToken ?? "",
                ["client_id"] = _clientId ?? "",
                ["client_secret"] = _clientSeret ?? "",
            };
            var httpClient = _httpClientFactory.CreateClient("Line");
            using var httpResponseMessage = await httpClient.PostAsync("https://api.line.me/oauth2/v2.1/token", new FormUrlEncodedContent(param));
            if (httpResponseMessage.IsSuccessStatusCode)
            {
                var lineAuthString = await httpResponseMessage.Content.ReadAsStringAsync();
                var lineAuth = JsonConvert.DeserializeObject<LineLoginAuth>(lineAuthString);
                var refreshToken = Guid.NewGuid().ToString();
                account.LineLoginAccessToken = lineAuth!.AccessToken;
                account.RefreshToken = lineAuth.RefreshToken;
                await _accountService.UpdateAccount(account);
                return account;
            }
            else
            {
                return null;
            }
        }
        catch
        {

            throw;
        }
    }
}
