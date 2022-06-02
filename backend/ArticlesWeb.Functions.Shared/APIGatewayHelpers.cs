using System.Text.Json;
using Amazon.Lambda.APIGatewayEvents;

namespace ArticlesWeb.Functions.Shared;

public class APIGatewayHelpers
{
    private static readonly JsonSerializerOptions SerializerOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
    };

    public static T GetRequestBody<T>(APIGatewayProxyRequest request) =>
        JsonSerializer.Deserialize<T>(request.Body, SerializerOptions);

    public static APIGatewayProxyResponse BuildResponse(object response) =>
        new()
        {
            Body = JsonSerializer.Serialize(response, SerializerOptions),
            StatusCode = 200,
            Headers = new Dictionary<string, string>
            {
                {"content-type", "application/json"}
            }
        };
}