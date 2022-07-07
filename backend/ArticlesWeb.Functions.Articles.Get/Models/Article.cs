using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class Article
{
    public Article(ArticleEntity articleEntity)
    {
        Id = articleEntity.Id;
        Title = articleEntity.Title;
        ImageUrl = articleEntity.ImageUrl;

        Sections = articleEntity.Sections?
            .Select(s => new ArticleSection(s))
            .ToArray() ?? Array.Empty<ArticleSection>();

        Comments = articleEntity.Comments?
            .Select(c => new Comment(c))
            .ToArray() ?? Array.Empty<Comment>();
    }

    public Guid Id { get; }

    public string Title { get; }

    public string ImageUrl { get; }

    public IReadOnlyCollection<ArticleSection> Sections { get; }

    public IReadOnlyCollection<Comment> Comments { get; }
}