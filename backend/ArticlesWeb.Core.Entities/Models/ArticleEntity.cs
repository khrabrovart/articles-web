using Amazon.DynamoDBv2.DataModel;

namespace ArticlesWeb.Core.Entities;

[DynamoDBTable("articles", lowerCamelCaseProperties: true)]
public class ArticleEntity
{
    public ArticleEntity(string title, string imageUrl, IEnumerable<ArticleSectionEntity> sections)
    {
        Id = Guid.NewGuid();
        CreatedOn = DateTime.UtcNow;
        Title = title;
        ImageUrl = imageUrl;
        Sections = sections.ToList();
        Comments = new List<CommentEntity>();
    }

    public ArticleEntity()
    {
    }

    [DynamoDBHashKey]
    public Guid Id { get; private set; }

    public DateTime CreatedOn { get; private set; }

    public string Title { get; private set; }

    public string ImageUrl { get; private set; }

    public List<ArticleSectionEntity> Sections { get; private set; }

    public List<CommentEntity> Comments { get; private set; }

    public Guid AuthorId { get; private set; }
}