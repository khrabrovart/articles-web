using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;
using ArticlesWeb.Core.Entities;
using ArticlesWeb.Core.Services;
using ArticlesWeb.Functions.Shared;
using Microsoft.Extensions.DependencyInjection;

[assembly: LambdaSerializer(typeof(DefaultLambdaJsonSerializer))]

namespace ArticlesWeb.Functions.Comments.Get;

public class Function
{
    private readonly ICommentsService _commentsService;

    public Function()
    {
        var serviceProvider = ConfigureServices();
        _commentsService = serviceProvider.GetService<ICommentsService>();
    }

    public async Task<APIGatewayProxyResponse> Handler(APIGatewayProxyRequest request, ILambdaContext ctx)
    {
        var comments = await _commentsService.Get(1);
        return APIGatewayHelpers.BuildResponse(comments);
    }

    private static IServiceProvider ConfigureServices()
    {
        var serviceCollection = new ServiceCollection();
        serviceCollection.AddTransient<ICommentsService, CommentsService>();

        return serviceCollection.BuildServiceProvider();
    }
}