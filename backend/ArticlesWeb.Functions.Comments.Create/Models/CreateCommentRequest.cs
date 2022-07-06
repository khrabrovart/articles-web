namespace ArticlesWeb.Functions.Comments.Create.Models;

public class CreateCommentRequest
{
    public Guid ArticleId { get; set; }

    public string Content { get; set; }
}