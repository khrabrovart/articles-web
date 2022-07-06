namespace ArticlesWeb.Core.Entities;

public class Comment
{
    public Comment(string content)
    {
        Id = Guid.NewGuid();
        CreatedOn = DateTime.UtcNow;
        Content = content;
        AuthorId = Guid.NewGuid();
    }

    protected Comment()
    {
    }

    public Guid Id { get; private set; }

    public DateTime CreatedOn { get; private set; }

    public string Content { get; private set; }

    public Guid AuthorId { get; private set; }
}