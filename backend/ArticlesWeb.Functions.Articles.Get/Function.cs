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

        var articles = requestParams.ArticleId is null
            ? await GetAllArticles()
            : new[] {await GetArticle(requestParams.ArticleId.Value)};

        object response = requestParams.Mode == RequestParameters.ResponseMode.Full
            ? articles
                .OrderByDescending(a => a.CreatedOn)
                .Select(a => new Article(a, requestParams.WithComments))
                .ToArray()
            : articles
                .OrderByDescending(a => a.CreatedOn)
                .Select(a => new ArticleSummary(a))
                .ToArray();

        return APIGatewayResponse.Ok(response);
    }

    private async Task<IReadOnlyCollection<DbArticle>> GetAllArticles() =>
        await _articlesService.GetAll();


    private async Task<DbArticle> GetArticle(Guid articleId) =>
        await _articlesService.Get(articleId);
}