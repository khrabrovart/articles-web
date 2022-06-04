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
                Date = DateTime.Parse("03/05/2022 13:30:00"),
                Content = "My 44 year old daughter rates this shot very slick.",
                Author = adamSavage
            },
            new()
            {
                Id = 2,
                ArticleId = 1,
                Date = DateTime.Parse("17/05/2022 07:22:16"),
                Content = "I wonder what would have happened if I made this",
                Author = adamSavage
            },
            new()
            {
                Id = 3,
                ArticleId = 1,
                Date = DateTime.Parse("03/06/2022 17:29:34"),
                Content = "Hugely thought out! Mmh wondering if this comment will hit the generator as well...",
                Author = billGates
            },
            new()
            {
                Id = 4,
                ArticleId = 1,
                Date = DateTime.Parse("27/09/2021 04:05:21"),
                Content = "Let me take a nap... great atmosphere, anyway.",
                Author = billGates
            },
        };

        return await Task.FromResult(comments);
    }
}