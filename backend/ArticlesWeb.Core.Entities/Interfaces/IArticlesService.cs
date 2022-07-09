namespace ArticlesWeb.Core.Entities;

public interface IArticlesService
{
    Task Create(string title, string imageUrl, IEnumerable<DbArticleSection> sections);

    Task<IReadOnlyCollection<DbArticle>> GetAll();

    Task<DbArticle> Get(Guid articleId);
}