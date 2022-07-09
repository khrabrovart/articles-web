using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using ArticlesWeb.Core.Entities;

namespace ArticlesWeb.Core.Services;

public class ArticlesService : IArticlesService
{
    private readonly AmazonDynamoDBClient _dbClient;

    public ArticlesService(AmazonDynamoDBClient dbClient)
    {
        _dbClient = dbClient;
    }

    public async Task Create(string title, string imageUrl, IEnumerable<DbArticleSection> sections)
    {
        var dbContext = new DynamoDBContext(_dbClient);

        var article = new DbArticle(title, imageUrl, sections);
        await dbContext.SaveAsync(article);
    }

    public async Task<IReadOnlyCollection<DbArticle>> GetAll()
    {
        var dbContext = new DynamoDBContext(_dbClient);

        return await dbContext
            .ScanAsync<DbArticle>(Array.Empty<ScanCondition>())
            .GetRemainingAsync();
    }

    public async Task<DbArticle> Get(Guid articleId)
    {
        var dbContext = new DynamoDBContext(_dbClient);

        return await dbContext.LoadAsync<DbArticle>(articleId);
    }
}