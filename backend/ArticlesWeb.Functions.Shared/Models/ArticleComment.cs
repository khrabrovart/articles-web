using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Functions.Shared.Models;

public class ArticleComment
{
    public ArticleComment(DbArticleComment dbArticleComment)
    {
        Id = dbArticleComment.Id;
        Content = dbArticleComment.Content;
        CreatedOn = dbArticleComment.CreatedOn;
        Author = null;
    }

    public Guid Id { get; }

    public string Content { get; }

    public DateTime CreatedOn { get; }

    public ArticleCommentAuthor Author { get; }
}
