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

    public async Task<DbArticleComment> Create(Guid articleId, string content)
    {
        var dbContext = new DynamoDBContext(_dbClient);

        var comment = new DbArticleComment(content);

        var article = await dbContext.LoadAsync<DbArticle>(articleId);
        article.Comments.Add(comment);

        await dbContext.SaveAsync(article);

        return comment;
    }
}