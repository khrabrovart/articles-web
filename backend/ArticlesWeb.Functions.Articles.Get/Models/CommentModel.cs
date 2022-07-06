using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class CommentModel
{
    public CommentModel(Comment comment)
    {
        Id = comment.Id;
        Content = comment.Content;
        CreatedOn = comment.CreatedOn;
        Author = null;
    }

    public Guid Id { get; set; }

    public string Content { get; set; }

    public DateTime CreatedOn { get; set; }

    public CommentAuthorModel Author { get; set; }
}
