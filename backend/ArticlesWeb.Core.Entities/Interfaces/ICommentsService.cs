namespace ArticlesWeb.Core.Entities;

public interface ICommentsService
{
    Task Create(Guid articleId, string content);
}