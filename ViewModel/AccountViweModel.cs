public class AccountViewModel
{
    [JsonProperty("id")]
    public string? Id { get; set; } = string.Empty;

    [JsonProperty("name")]
    public string? Name { get; set; } = string.Empty;

    [JsonProperty("email")]
    public string? Email { get; set; } = string.Empty;
    [JsonProperty("picture")]
    public string? Picture { get; set; } = string.Empty;
}
