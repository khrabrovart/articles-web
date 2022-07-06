using Amazon.DynamoDBv2.DataModel;

namespace ArticlesWeb.Core.Entities;

[DynamoDBTable("comments", lowerCamelCaseProperties: true)]
public class Comment
{
    public Comment(string articleId, string content, string authorId)
    {
        Id = Guid.NewGuid().ToString();
        ArticleId = articleId;
        Date = DateTime.UtcNow;
        Content = content;
        AuthorId = authorId;
    }

    public Comment()
    {
    }

    [DynamoDBHashKey]
    public string Id { get; set; }

    [DynamoDBProperty]
    public string ArticleId { get; set; }

    [DynamoDBProperty]
    public DateTime Date { get; set; }

    [DynamoDBProperty]
    public string Content { get; set; }

    [DynamoDBProperty]
    public string AuthorId { get; set; }
}