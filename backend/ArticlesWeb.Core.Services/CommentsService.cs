using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Core.Services;

public class CommentsService : ICommentsService
{
    private readonly AmazonDynamoDBClient _dbClient;

    public CommentsService(AmazonDynamoDBClient dbClient)
    {
        _dbClient = dbClient;
    }

    public async Task Create(Guid articleId, string content)
    {
        var dbContext = new DynamoDBContext(_dbClient);

        var article = await dbContext.LoadAsync<DbArticle>(articleId);
        article.Comments.Add(new DbArticleComment(content));

        await dbContext.SaveAsync(article);
    }
}