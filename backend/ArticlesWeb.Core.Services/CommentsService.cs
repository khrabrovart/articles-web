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
                Content = "The cabin's atmosphere is nice enough, but it's not nearly as plush as those of our favorites such as the Mercedes-Benz E-class and the Volvo S90.",
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
                Content = "With an electric motor dedicated to each of the front and rear axles, the Model S offers full-time all-wheel drive no matter which version you choose. Acceleration of the various models ranges from outstanding to ferocious.",
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