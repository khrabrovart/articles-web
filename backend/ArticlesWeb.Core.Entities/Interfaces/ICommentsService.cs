namespace ArticlesWeb.Core.Entities;

public interface ICommentsService
{
    Task<DbArticleComment> Create(Guid articleId, string content);
}