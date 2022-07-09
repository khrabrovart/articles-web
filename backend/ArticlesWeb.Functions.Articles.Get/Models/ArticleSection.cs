using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class ArticleSection
{
    public ArticleSection(DbArticleSection section)
    {
        Title = section.Title;
        Content = section.Content;
    }

    public string Title { get; }

    public string Content { get; }
}