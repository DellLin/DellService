
public class PttCatchHistory
{
    [JsonProperty("id")]
    public string? Id { get; set; }
    [JsonProperty("userId")]
    public string? UserId { get; set; }
    [JsonProperty("title")]
    public string? Title { get; set; }
    [JsonProperty("url")]
    public string? Url { get; set; }
    [JsonProperty("catchTime")]
    public DateTime? CatchTime { get; set; }
}
