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
        var articleId = Guid.Parse(apiRequest.QueryStringParameters["articleId"]);

        var article = await _articlesService.Get(articleId);
        var response = new ArticleModel(article);

        return APIGatewayHelpers.BuildResponse(response);
    }
}