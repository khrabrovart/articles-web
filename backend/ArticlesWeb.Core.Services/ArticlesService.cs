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

    public async Task Create(string title, string imageUrl, IEnumerable<ArticleSectionEntity> sections)
    {
        var dbContext = new DynamoDBContext(_dbClient);

        var article = new ArticleEntity(title, imageUrl, sections);
        await dbContext.SaveAsync(article);
    }

    public async Task<IReadOnlyCollection<ArticleEntity>> GetAll()
    {
        var dbContext = new DynamoDBContext(_dbClient);

        return await dbContext
            .ScanAsync<ArticleEntity>(Array.Empty<ScanCondition>())
            .GetRemainingAsync();
    }

    public async Task<ArticleEntity> Get(Guid articleId)
    {
        var dbContext = new DynamoDBContext(_dbClient);

        return await dbContext.LoadAsync<ArticleEntity>(articleId);
    }
}