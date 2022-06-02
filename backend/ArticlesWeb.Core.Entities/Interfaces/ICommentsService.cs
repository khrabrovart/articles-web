namespace ArticlesWeb.Core.Entities;

public interface ICommentsService
{
    Task<IReadOnlyCollection<Comment>> Get(int articleId);
}