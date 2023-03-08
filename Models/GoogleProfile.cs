
public class GoogleProfile
{
    [JsonProperty("resourceName")]
    public string? ResourceName { get; set; }
    [JsonProperty("names")]
    public IList<Name>? Names { get; set; }
    [JsonProperty("photos")]
    public IList<Name>? Photos { get; set; }
}

public class Name
{
    [JsonProperty("displayName")]
    public string? DisplayName { get; set; }
}
public class Photo
{
    [JsonProperty("url")]
    public string? Url { get; set; }
}
