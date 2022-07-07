using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;
using ArticlesWeb.Core.Entities;
using ArticlesWeb.Functions.Comments.Create.Models;
using ArticlesWeb.Functions.Shared;
using Microsoft.Extensions.DependencyInjection;

[assembly: LambdaSerializer(typeof(DefaultLambdaJsonSerializer))]

namespace ArticlesWeb.Functions.Comments.Create;

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
        LambdaLogger.Log(apiRequest.Body);

        var request = apiRequest.GetBody<RequestData>();
        await _commentsService.Create(request.ArticleId, request.Content);

        return APIGatewayResponse.Created();
    }
}