using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class ArticleSummary
{
    public ArticleSummary(DbArticle dbArticle)
    {
        Id = dbArticle.Id;
        Title = dbArticle.Title;
        ImageUrl = dbArticle.ImageUrl;
    }

    public Guid Id { get; }

    public string Title { get; }

    public string ImageUrl { get; }
}