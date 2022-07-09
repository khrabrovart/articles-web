using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class Article
{
    public Article(DbArticle dbArticle, bool withComments)
    {
        Id = dbArticle.Id;
        Title = dbArticle.Title;
        ImageUrl = dbArticle.ImageUrl;

        Sections = dbArticle.Sections?
            .Select(s => new ArticleSection(s))
            .ToArray() ?? Array.Empty<ArticleSection>();

        if (withComments)
        {
            Comments = dbArticle.Comments?
                .Select(c => new ArticleComment(c))
                .ToArray() ?? Array.Empty<ArticleComment>();
        }
    }

    public Guid Id { get; }

    public string Title { get; }

    public string ImageUrl { get; }

    public IReadOnlyCollection<ArticleSection> Sections { get; }

    public IReadOnlyCollection<ArticleComment> Comments { get; }
}