using Amazon;
using Amazon.DynamoDBv2;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;
using ArticlesWeb.Core.Entities;
using ArticlesWeb.Core.Services;
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
        var serviceCollection = new ServiceCollection();
        ConfigureServices(serviceCollection);
        var serviceProvider = serviceCollection.BuildServiceProvider();

        _commentsService = serviceProvider.GetService<ICommentsService>();
    }

    public async Task<APIGatewayProxyResponse> Handler(APIGatewayProxyRequest apiRequest, ILambdaContext ctx)
    {
        LambdaLogger.Log(apiRequest.Body);

        var request = apiRequest.GetBody<CreateCommentRequest>();
        var comment = await _commentsService.Save(request.Content);

        return APIGatewayHelpers.BuildResponse(comment);
    }

    private static IServiceProvider ConfigureServices(IServiceCollection services)
    {
        services.AddTransient<ICommentsService, CommentsService>();
        services.AddSingleton(_ => new AmazonDynamoDBClient(RegionEndpoint.USEast1));

        return services.BuildServiceProvider();
    }
}