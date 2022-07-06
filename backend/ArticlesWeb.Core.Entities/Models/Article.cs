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

    public Article()
    {
    }

    [DynamoDBHashKey]
    public Guid Id { get; set; }

    public DateTime CreatedOn { get; set; }

    public string Title { get; set; }

    public List<Comment> Comments { get; set; }
}