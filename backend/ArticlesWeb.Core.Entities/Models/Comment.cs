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

    private Comment()
    {
    }

    public Guid Id { get; set; }

    public DateTime CreatedOn { get; set; }

    public string Content { get; set; }

    public Guid AuthorId { get; set; }
}