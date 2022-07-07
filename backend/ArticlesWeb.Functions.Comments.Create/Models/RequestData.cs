namespace ArticlesWeb.Functions.Comments.Create.Models;

public class RequestData
{
    public Guid ArticleId { get; set; }

    public string Content { get; set; }
}