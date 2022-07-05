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
    public async Task<APIGatewayProxyResponse> Handler(string input, ILambdaContext ctx)
    {
        LambdaLogger.Log("Some message in logs");

        var c = new AmazonDynamoDBClient(RegionEndpoint.USEast1);

        await c.PutItemAsync("comments", new Dictionary<string, AttributeValue>
        {
            {"key1", new AttributeValue("val1")}
        });

        return APIGatewayHelpers.BuildResponse("successful response 111");
    }
}