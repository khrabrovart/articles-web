using Amazon;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;
using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;

[assembly: LambdaSerializer(typeof(DefaultLambdaJsonSerializer))]

namespace ArticlesWeb.Functions.Comments.Create;

public class Function
{
    public string[] Handler(string input, ILambdaContext ctx)
    {
        LambdaLogger.Log("Some message in logs");

        var c = new AmazonDynamoDBClient(RegionEndpoint.USEast1);

        c.PutItemAsync("comments", new Dictionary<string, AttributeValue>
        {
            {"key1", new AttributeValue("val1")}
        });

        return new[]
        {
            "Comment 1",
            "Comment 2",
            input
        };
    }
}