using Amazon;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Core.Services;

public class CommentsService : ICommentsService
{
    private static readonly AmazonDynamoDBClient _dbClient = new AmazonDynamoDBClient(RegionEndpoint.USEast1);
    public async Task<Comment> Save(string content)
    {
        var dbContext = new DynamoDBContext(_dbClient);

        var comment = new Comment(
            articleId: "d13109b0-6085-4bbf-9a5e-0b4d6da2c600",
            content,
            authorId: "df3109b0-6085-4bbf-9a5e-0b4d6da2c601");

        await dbContext.SaveAsync(comment);
        return comment;
    }

    public async Task<IReadOnlyCollection<Comment>> Get(string articleId)
    {
        var adamSavage = new CommentAuthor
        {
            UserId = "df3109b0-6085-4bbf-9a5e-0b4d6da2c601",
            UserImageId = "df3109b0-6085-4bbf-9a5e-0b4d6da2c001",
            UserName = "adam_savage",
            FullName = "Adam Savage"
        };

        var billGates = new CommentAuthor
        {
            UserId = "df3109b0-6085-4bbf-9a5e-0b4d6da2c602",
            UserImageId = "df3109b0-6085-4bbf-9a5e-0b4d6da2c002",
            UserName = "bill_gates",
            FullName = "Bill Gates",
        };

        var comments = new Comment[]
        {
            new()
            {
                Id = "df3109b0-6085-4bbf-9a5e-0b4d6da2c611",
                ArticleId = "d13109b0-6085-4bbf-9a5e-0b4d6da2c600",
                Date = DateTime.Now,
                Content = "The cabin's atmosphere is nice enough, but it's not nearly as plush as those of our favorites such as the Mercedes-Benz E-class and the Volvo S90.",
                AuthorId = "df3109b0-6085-4bbf-9a5e-0b4d6da2c602"
            },
            new()
            {
                Id = "df3109b0-6085-4bbf-9a5e-0b4d6da2c612",
                ArticleId = "d13109b0-6085-4bbf-9a5e-0b4d6da2c600",
                Date = DateTime.Now,
                Content = "I wonder what would have happened if I made this",
                AuthorId = "df3109b0-6085-4bbf-9a5e-0b4d6da2c602"
            },
            new()
            {
                Id = "df3109b0-6085-4bbf-9a5e-0b4d6da2c613",
                ArticleId = "d13109b0-6085-4bbf-9a5e-0b4d6da2c600",
                Date = DateTime.Now,
                Content = "With an electric motor dedicated to each of the front and rear axles, the Model S offers full-time all-wheel drive no matter which version you choose. Acceleration of the various models ranges from outstanding to ferocious.",
                AuthorId = "df3109b0-6085-4bbf-9a5e-0b4d6da2c601"
            },
            new()
            {
                Id = "df3109b0-6085-4bbf-9a5e-0b4d6da2c614",
                ArticleId = "d13109b0-6085-4bbf-9a5e-0b4d6da2c600",
                Date = DateTime.Now,
                Content = "Let me take a nap... great atmosphere, anyway.",
                AuthorId = "df3109b0-6085-4bbf-9a5e-0b4d6da2c601"
            },
        };

        return await Task.FromResult(comments);
    }
}