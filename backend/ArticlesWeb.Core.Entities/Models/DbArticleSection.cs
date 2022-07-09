namespace ArticlesWeb.Core.Entities;

public class DbArticleSection
{
    public DbArticleSection(string title, string content)
    {
        Id = Guid.NewGuid();
        Title = title;
        Content = content;
    }

    public DbArticleSection()
    {
    }

    public Guid Id { get; private set; }

    public string Title { get; private set; }

    public string Content { get; private set; }
}