namespace ArticlesWeb.Core.Entities;

public class CommentEntity
{
    public CommentEntity(string content)
    {
        Id = Guid.NewGuid();
        CreatedOn = DateTime.UtcNow;
        Content = content;
    }

    public CommentEntity()
    {
    }

    public Guid Id { get; private set; }

    public DateTime CreatedOn { get; private set; }

    public string Content { get; private set; }

    public Guid AuthorId { get; private set; }
}