namespace ArticlesWeb.Core.Entities;

public class Comment
{
    public int Id { get; set; }

    public int ArticleId { get; set; }

    public DateTime Date { get; set; }

    public string Content { get; set; }

    public CommentAuthor Author { get; set; }
}