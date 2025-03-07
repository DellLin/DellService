using System;
using System.Collections.Generic;
using Newtonsoft.Json;

public class LineBotEvent
{
    [JsonProperty("destination")]
    public string Destination { get; set; }

    [JsonProperty("events")]
    public List<Event> Events { get; set; }

    public class Event
    {
        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("message")]
        public Message? Message { get; set; }

        [JsonProperty("timestamp")]
        public long Timestamp { get; set; }

        [JsonProperty("source")]
        public Source Source { get; set; }

        [JsonProperty("replyToken")]
        public string? ReplyToken { get; set; }

        [JsonProperty("mode")]
        public string Mode { get; set; }

        [JsonProperty("webhookEventId")]
        public string WebhookEventId { get; set; }

        [JsonProperty("deliveryContext")]
        public DeliveryContext DeliveryContext { get; set; }
    }

    public class Message
    {
        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("text")]
        public string Text { get; set; }
    }

    public class Source
    {
        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("userId")]
        public string UserId { get; set; }
    }

    public class DeliveryContext
    {
        [JsonProperty("isRedelivery")]
        public bool IsRedelivery { get; set; }
    }
}
