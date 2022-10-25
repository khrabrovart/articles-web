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
        using var dbContext = new DynamoDBContext(_dbClient);

        var comment = new DbArticleComment(content);

        var commentsCollection = await dbContext.LoadAsync<DbArticleCommentsCollection>(articleId);
        commentsCollection.Comments.Add(comment);

        await dbContext.SaveAsync(commentsCollection);

        return comment;
    }

    public async Task<IReadOnlyCollection<DbArticleComment>> Get(Guid articleId)
    {
        using var dbContext = new DynamoDBContext(_dbClient);

        var commentsCollection = await dbContext.LoadAsync<DbArticleCommentsCollection>(articleId);

        return commentsCollection.Comments;
    }
}