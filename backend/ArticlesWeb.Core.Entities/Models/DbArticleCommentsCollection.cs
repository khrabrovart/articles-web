using Amazon.DynamoDBv2.DataModel;

namespace ArticlesWeb.Core.Entities;

[DynamoDBTable("article_comments", lowerCamelCaseProperties: true)]
public class DbArticleCommentsCollection
{
    public DbArticleCommentsCollection(Guid articleId)
    {
        Id = articleId;
        CreatedOn = DateTime.UtcNow;
    }

    public DbArticleCommentsCollection()
    {
    }

    [DynamoDBHashKey]
    public Guid Id { get; private set; }

    public DateTime CreatedOn { get; private set; }

    public List<DbArticleComment> Comments { get; private set; } = new();
}