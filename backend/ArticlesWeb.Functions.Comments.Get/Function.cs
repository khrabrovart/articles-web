using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;
using ArticlesWeb.Core.Entities;
using ArticlesWeb.Functions.Comments.Get.Models;
using ArticlesWeb.Functions.Shared;
using ArticlesWeb.Functions.Shared.Models;
using Microsoft.Extensions.DependencyInjection;

[assembly: LambdaSerializer(typeof(DefaultLambdaJsonSerializer))]

namespace ArticlesWeb.Functions.Comments.Get;

public class Function
{
    private readonly ICommentsService _commentsService;

    public Function()
    {
        var serviceProvider = LambdaConfiguration.ConfigureServices();
        _commentsService = serviceProvider.GetService<ICommentsService>();
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
        var comments = await _commentsService.Get(articleId);

        return comments
            .OrderByDescending(c => c.CreatedOn)
            .Select(c => new ArticleComment(c))
            .ToArray();
    }
}