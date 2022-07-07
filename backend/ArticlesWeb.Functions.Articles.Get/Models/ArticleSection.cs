using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class ArticleSection
{
    public ArticleSection(ArticleSectionEntity sectionEntity)
    {
        Title = sectionEntity.Title;
        Content = sectionEntity.Content;
    }

    public string Title { get; }

    public string Content { get; }
}