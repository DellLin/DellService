using System;
using System.Collections.Generic;
using Newtonsoft.Json;

public class LineBotEvent
{
    [JsonProperty("destination")]
    public string Destination { get; set; } = null!;

    [JsonProperty("events")]
    public List<Event> Events { get; set; } = null!;

    public class Event
    {
        [JsonProperty("type")]
        public string Type { get; set; } = null!;

        [JsonProperty("message")]
        public Message Message { get; set; } = null!;

        [JsonProperty("timestamp")]
        public long Timestamp { get; set; }

        [JsonProperty("source")]
        public Source Source { get; set; } = null!;

        [JsonProperty("replyToken")]
        public string ReplyToken { get; set; } = null!;

        [JsonProperty("mode")]
        public string Mode { get; set; } = null!;

        [JsonProperty("webhookEventId")]
        public string WebhookEventId { get; set; } = null!;

        [JsonProperty("deliveryContext")]
        public DeliveryContext DeliveryContext { get; set; } = null!;
        [JsonProperty("link")]
        public Link Link { get; set; } = null!;
    }

    public class Message
    {
        [JsonProperty("type")]
        public string Type { get; set; } = null!;

        [JsonProperty("id")]
        public string Id { get; set; } = null!;

        [JsonProperty("text")]
        public string Text { get; set; } = null!;
    }

    public class Source
    {
        [JsonProperty("type")]
        public string Type { get; set; } = null!;

        [JsonProperty("userId")]
        public string UserId { get; set; } = null!;
    }

    public class DeliveryContext
    {
        [JsonProperty("isRedelivery")]
        public bool IsRedelivery { get; set; }
    }
    public class Link
    {
        [JsonProperty("result")]
        public string Result { get; set; } = null!;
        [JsonProperty("nonce")]
        public string Nonce { get; set; } = null!;
    }
}
