using Amazon.DynamoDBv2.DataModel;

namespace ArticlesWeb.Core.Entities;

[DynamoDBTable("comments")]
public class Comment
{
    [DynamoDBHashKey]
    public int Id { get; set; }

    [DynamoDBProperty]
    public int ArticleId { get; set; }

    [DynamoDBProperty]
    public DateTime Date { get; set; }

    [DynamoDBProperty]
    public string Content { get; set; }

    [DynamoDBProperty]
    public CommentAuthor Author { get; set; }
}