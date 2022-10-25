using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class Article
{
    public Article(DbArticle dbArticle)
    {
        Id = dbArticle.Id;
        Title = dbArticle.Title;
        ImageUrl = dbArticle.ImageUrl;

        Sections = dbArticle.Sections?
            .Select(s => new ArticleSection(s))
            .ToArray() ?? Array.Empty<ArticleSection>();
    }

    public Guid Id { get; }

    public string Title { get; }

    public string ImageUrl { get; }

    public IReadOnlyCollection<ArticleSection> Sections { get; }
}