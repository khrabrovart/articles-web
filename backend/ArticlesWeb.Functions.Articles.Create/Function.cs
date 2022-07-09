using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;
using ArticlesWeb.Core.Entities;
using ArticlesWeb.Functions.Articles.Create.Models;
using ArticlesWeb.Functions.Shared;
using Microsoft.Extensions.DependencyInjection;

[assembly: LambdaSerializer(typeof(DefaultLambdaJsonSerializer))]

namespace ArticlesWeb.Functions.Articles.Create;

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
        LambdaLogger.Log(apiRequest.Body);

        var request = apiRequest.GetBody<RequestData>();

        var sections = request.Sections
            .Select(s => new DbArticleSection(s.Title, s.Content))
            .ToArray();

        await _articlesService.Create(request.Title, request.ImageUrl, sections);

        return APIGatewayResponse.Created();
    }
}