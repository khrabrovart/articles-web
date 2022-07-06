using Amazon;
using Amazon.DynamoDBv2;
using ArticlesWeb.Core.Entities;
using ArticlesWeb.Core.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ArticlesWeb.Functions.Shared;

public class LambdaConfiguration : ILambdaConfiguration
{
    public static IServiceProvider ConfigureServices()
    {
        var services = new ServiceCollection();

        services.AddTransient<ICommentsService, CommentsService>();
        services.AddTransient<IArticlesService, ArticlesService>();
        services.AddSingleton(_ => new AmazonDynamoDBClient(RegionEndpoint.USEast1));

        return services.BuildServiceProvider();
    }

    public IConfiguration Configuration  => new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        .Build();
}