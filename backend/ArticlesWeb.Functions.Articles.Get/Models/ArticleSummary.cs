using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class ArticleSummary
{
    public ArticleSummary(ArticleEntity articleEntity)
    {
        Id = articleEntity.Id;
        Title = articleEntity.Title;
        ImageUrl = articleEntity.ImageUrl;
    }

    public Guid Id { get; }

    public string Title { get; }

    public string ImageUrl { get; }
}