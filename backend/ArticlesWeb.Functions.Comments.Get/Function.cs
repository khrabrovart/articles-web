using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;
using ArticlesWeb.Core.Entities;
using ArticlesWeb.Functions.Comments.Get.Models;
using ArticlesWeb.Functions.Shared;
using Microsoft.Extensions.DependencyInjection;

[assembly: LambdaSerializer(typeof(DefaultLambdaJsonSerializer))]

namespace ArticlesWeb.Functions.Comments.Get;

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

        if (requestParams.ArticleId is null)
        {
            return APIGatewayResponse.BadRequest();
        }

        object response = await GetArticleComments(requestParams.ArticleId.Value);

        return APIGatewayResponse.Ok(response);
    }

    private async Task<IReadOnlyCollection<ArticleComment>> GetArticleComments(Guid articleId)
    {
        var article = await _articlesService.Get(articleId);
        return article.Comments
            .Select(c => new ArticleComment(c))
            .ToArray();
    }
}