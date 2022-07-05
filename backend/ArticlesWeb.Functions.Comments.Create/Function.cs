using Amazon;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;
using ArticlesWeb.Functions.Shared;

[assembly: LambdaSerializer(typeof(DefaultLambdaJsonSerializer))]

namespace ArticlesWeb.Functions.Comments.Create;

public class Function
{
    public async Task<APIGatewayProxyResponse> Handler(APIGatewayProxyRequest request, ILambdaContext ctx)
    {
        LambdaLogger.Log("Function start");

        LambdaLogger.Log(request.Body);

        using var c = new AmazonDynamoDBClient(RegionEndpoint.USEast1);

        LambdaLogger.Log("Client created");

        var tables = await c.ListTablesAsync(10);

        LambdaLogger.Log("Tables list");

        foreach (var table in tables.TableNames)
        {
            LambdaLogger.Log($"Table: {table}");
        }

        await c.PutItemAsync("comments", new Dictionary<string, AttributeValue>
        {
            {"id", new AttributeValue { N = "1"}}
        });

        LambdaLogger.Log("Item saved");

        return APIGatewayHelpers.BuildResponse("successful response 111");
    }
}