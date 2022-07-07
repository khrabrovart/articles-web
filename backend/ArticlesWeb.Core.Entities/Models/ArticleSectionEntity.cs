namespace ArticlesWeb.Core.Entities;

public class ArticleSectionEntity
{
    public ArticleSectionEntity(string title, string content)
    {
        Id = Guid.NewGuid();
        Title = title;
        Content = content;
    }

    public ArticleSectionEntity()
    {
    }

    public Guid Id { get; private set; }

    public string Title { get; private set; }

    public string Content { get; private set; }
}