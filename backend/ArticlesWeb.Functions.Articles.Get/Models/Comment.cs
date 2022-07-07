using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class Comment
{
    public Comment(CommentEntity commentEntity)
    {
        Id = commentEntity.Id;
        Content = commentEntity.Content;
        CreatedOn = commentEntity.CreatedOn;
        Author = null;
    }

    public Guid Id { get; }

    public string Content { get; }

    public DateTime CreatedOn { get; }

    public CommentAuthor Author { get; }
}
