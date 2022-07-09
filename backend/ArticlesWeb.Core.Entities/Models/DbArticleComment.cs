namespace ArticlesWeb.Core.Entities;

public class DbArticleComment
{
    public DbArticleComment(string content)
    {
        Id = Guid.NewGuid();
        CreatedOn = DateTime.UtcNow;
        Content = content;
    }

    public DbArticleComment()
    {
    }

    public Guid Id { get; private set; }

    public DateTime CreatedOn { get; private set; }

    public string Content { get; private set; }

    public Guid AuthorId { get; private set; }
}