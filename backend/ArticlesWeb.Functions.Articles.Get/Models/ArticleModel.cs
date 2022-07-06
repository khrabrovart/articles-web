using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class ArticleModel
{
    public ArticleModel(Article article)
    {
        Id = article.Id;
        Title = article.Title;
        Comments = article.Comments.Select(c => new CommentModel(c)).ToList();
    }

    public Guid Id { get; set; }

    public string Title { get; set; }

    public List<CommentModel> Comments { get; set; }
}