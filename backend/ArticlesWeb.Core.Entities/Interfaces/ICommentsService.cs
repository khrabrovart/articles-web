namespace ArticlesWeb.Core.Entities;

public interface ICommentsService
{
    Task<Comment> Save(string content);

    Task<IReadOnlyCollection<Comment>> Get(int articleId);
}