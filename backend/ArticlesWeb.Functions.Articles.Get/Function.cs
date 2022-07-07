using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;
using ArticlesWeb.Core.Entities;
using ArticlesWeb.Functions.Articles.Get.Models;
using ArticlesWeb.Functions.Shared;
using Microsoft.Extensions.DependencyInjection;

[assembly: LambdaSerializer(typeof(DefaultLambdaJsonSerializer))]

namespace ArticlesWeb.Functions.Articles.Get;

public class Function
{
    private readonly IArticlesService _articlesService;

    public Function()
    {
        var serviceProvider = LambdaConfiguration.ConfigureServices();
        _articlesService = serviceProvider.GetService<IArticlesService>();
    }

    public async Task<APIGatewayProxyResponse> Handler(APIGatewayProxyRequest apiRequest, ILambdaContext ctx)
    {
        var requestParams = RequestParameters.FromAPIRequest(apiRequest);

        object response = requestParams?.ArticleId is null
            ? await GetAllArticles()
            : await GetArticle(requestParams.ArticleId.Value);

        return APIGatewayResponse.Ok(response);
    }

    private async Task<IReadOnlyCollection<ArticleSummary>> GetAllArticles()
    {
        var articles = await _articlesService.GetAll();
        return articles
            .Select(a => new ArticleSummary(a))
            .ToArray();
    }

    private async Task<Article> GetArticle(Guid articleId)
    {
        var article = await _articlesService.Get(articleId);
        return new Article(article);
    }
}