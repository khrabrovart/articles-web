using Amazon.DynamoDBv2.DataModel;

namespace ArticlesWeb.Core.Entities;

public class CommentAuthor
{
    [DynamoDBProperty]
    public string UserId { get; set; }

    [DynamoDBProperty]
    public string UserImageId { get; set; }

    [DynamoDBProperty]
    public string UserName { get; set; }

    [DynamoDBProperty]
    public string FullName { get; set; }
}