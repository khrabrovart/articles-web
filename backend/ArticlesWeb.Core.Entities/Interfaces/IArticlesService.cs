namespace ArticlesWeb.Core.Entities;

public interface IArticlesService
{
    Task Create(string title, string imageUrl, IEnumerable<ArticleSectionEntity> sections);

    Task<IReadOnlyCollection<ArticleEntity>> GetAll();

    Task<ArticleEntity> Get(Guid articleId);
}