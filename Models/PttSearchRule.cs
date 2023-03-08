
public class PttSearchRule
{
    [JsonProperty("id")]
    public string? Id { get; set; }
    [JsonProperty("userId")]
    public string? UserId { get; set; }
    [JsonProperty("boardName")]
    public string? BoardName { get; set; }
    [JsonProperty("searchRegx")]
    public string? SearchRegx { get; set; }
}
