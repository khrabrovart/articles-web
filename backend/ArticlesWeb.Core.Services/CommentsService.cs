using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Core.Services;

public class CommentsService : ICommentsService
{
    public async Task<IReadOnlyCollection<Comment>> Get(int articleId)
    {
        var adamSavage = new CommentAuthor
        {
            UserId = 1,
            UserImageId = 1,
            UserName = "adam_savage",
            FullName = "Adam Savage"
        };

        var billGates = new CommentAuthor
        {
            UserId = 2,
            UserImageId = 2,
            UserName = "bill_gates",
            FullName = "Bill Gates",
        };

        var comments = new Comment[]
        {
            new()
            {
                Id = 1,
                ArticleId = 1,
                Date = DateTime.Now,
                Content = "My 44 year old daughter rates this shot very slick.",
                Author = adamSavage
            },
            new()
            {
                Id = 2,
                ArticleId = 1,
                Date = DateTime.Now,
                Content = "I wonder what would have happened if I made this",
                Author = adamSavage
            },
            new()
            {
                Id = 3,
                ArticleId = 1,
                Date = DateTime.Now,
                Content = "Hugely thought out! Mmh wondering if this comment will hit the generator as well...",
                Author = billGates
            },
            new()
            {
                Id = 4,
                ArticleId = 1,
                Date = DateTime.Now,
                Content = "Let me take a nap... great atmosphere, anyway.",
                Author = billGates
            },
        };

        return await Task.FromResult(comments);
    }
}