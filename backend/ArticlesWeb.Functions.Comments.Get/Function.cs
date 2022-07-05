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
    private readonly IDynamoDBContext _dbContext;

    public Function()
    {
        var serviceCollection = new ServiceCollection();
        ConfigureServices(serviceCollection);
        var serviceProvider = serviceCollection.BuildServiceProvider();

        _commentsService = serviceProvider.GetService<ICommentsService>();
        _dbContext = serviceProvider.GetService<IDynamoDBContext>();
    }

    public async Task<APIGatewayProxyResponse> Handler(APIGatewayProxyRequest request, ILambdaContext ctx)
    {
        var comments = await _commentsService.Get(1);
        return APIGatewayHelpers.BuildResponse(comments);
    }

    private static IServiceProvider ConfigureServices(IServiceCollection services)
    {
        services.AddTransient<ICommentsService, CommentsService>();

        var dbConfig = new AmazonDynamoDBConfig
        {
            ServiceURL = "dynamodb.us-east-1.amazonaws.com"
        };

        var dbClient = new AmazonDynamoDBClient(dbConfig);
        var dbContext = new DynamoDBContext(dbClient);

        services.AddSingleton<IDynamoDBContext>(dbContext);

        return services.BuildServiceProvider();
    }
}