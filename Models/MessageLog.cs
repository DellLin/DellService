public class MessageLog
{
    [JsonProperty("id")]
    public string? Id { get; set; }
    [JsonProperty("message")]
    public string? Message { get; set; }
    [JsonProperty("sendDateTime")]
    public string? SendDateTime { get; set; }
}
