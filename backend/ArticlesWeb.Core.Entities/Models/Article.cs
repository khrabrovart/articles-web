using Amazon.DynamoDBv2.DataModel;

namespace ArticlesWeb.Core.Entities;

[DynamoDBTable("articles", lowerCamelCaseProperties: true)]
public class Article
{
    public Article(string title)
    {
        Id = Guid.NewGuid();
        CreatedOn = DateTime.UtcNow;
        Title = title;
        Comments = new List<Comment>();
    }

    protected Article()
    {
    }

    [DynamoDBHashKey]
    public Guid Id { get; private set; }

    public DateTime CreatedOn { get; private set; }

    public string Title { get; private set; }

    public List<Comment> Comments { get; private set; }
}