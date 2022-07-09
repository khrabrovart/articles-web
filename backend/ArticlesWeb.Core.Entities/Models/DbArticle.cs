using Amazon.DynamoDBv2.DataModel;

namespace ArticlesWeb.Core.Entities;

[DynamoDBTable("articles", lowerCamelCaseProperties: true)]
public class DbArticle
{
    public DbArticle(string title, string imageUrl, IEnumerable<DbArticleSection> sections)
    {
        Id = Guid.NewGuid();
        CreatedOn = DateTime.UtcNow;
        Title = title;
        ImageUrl = imageUrl;
        Sections = sections?.ToList();
    }

    public DbArticle()
    {
    }

    [DynamoDBHashKey]
    public Guid Id { get; private set; }

    public DateTime CreatedOn { get; private set; }

    public string Title { get; private set; }

    public string ImageUrl { get; private set; }

    public Guid AuthorId { get; private set; }

    public List<DbArticleSection> Sections { get; private set; }

    public List<DbArticleComment> Comments { get; private set; }
}