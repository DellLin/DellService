public class LineNotufyState
{
    [JsonProperty("status")]
    public int? Status { get; set; }

    [JsonProperty("message")]
    public string? Message { get; set; }

    [JsonProperty("targetType")]
    public string? TargetType { get; set; }

    [JsonProperty("target")]
    public string? Target { get; set; }

}
