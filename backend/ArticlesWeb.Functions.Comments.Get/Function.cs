using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
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
        var serviceCollection = new ServiceCollection();
        ConfigureServices(serviceCollection);
        var serviceProvider = serviceCollection.BuildServiceProvider();

        _commentsService = serviceProvider.GetService<ICommentsService>();
    }

    public async Task<APIGatewayProxyResponse> Handler(APIGatewayProxyRequest apiRequest, ILambdaContext ctx)
    {
        var comments = await _commentsService.Get("d13109b0-6085-4bbf-9a5e-0b4d6da2c600");
        return APIGatewayHelpers.BuildResponse(comments);
    }

    private static IServiceProvider ConfigureServices(IServiceCollection services)
    {
        services.AddTransient<ICommentsService, CommentsService>();
        services.AddSingleton(_ => new AmazonDynamoDBClient());

        return services.BuildServiceProvider();
    }
}