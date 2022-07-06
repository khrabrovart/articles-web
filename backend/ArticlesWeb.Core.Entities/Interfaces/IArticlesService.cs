namespace ArticlesWeb.Core.Entities;

public interface IArticlesService
{
    Task Create(string title);

    Task<Article> Get(Guid articleId);
}