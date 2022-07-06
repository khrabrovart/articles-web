﻿using Amazon.DynamoDBv2;
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

    public async Task Create(string title)
    {
        var dbContext = new DynamoDBContext(_dbClient);

        var article = new Article(title);
        await dbContext.SaveAsync(article);
    }

    public async Task<Article> Get(Guid articleId)
    {
        var dbContext = new DynamoDBContext(_dbClient);

        return await dbContext.LoadAsync<Article>(articleId);
    }
}