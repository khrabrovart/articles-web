using System.Text.Json;
using Amazon.Lambda.APIGatewayEvents;

namespace ArticlesWeb.Functions.Shared;

public static class APIGatewayResponse
{
    private static readonly JsonSerializerOptions SerializerOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
    };

    public static APIGatewayProxyResponse BuildResponse(object response, int statusCode) =>
        new()
        {
            Body = response is null ? null : JsonSerializer.Serialize(response, SerializerOptions),
            StatusCode = statusCode,
            Headers = new Dictionary<string, string>
            {
                {"content-type", "application/json"}
            }
        };

    public static APIGatewayProxyResponse Ok(object response) => BuildResponse(response, 200);
    public static APIGatewayProxyResponse Created() => BuildResponse(null, 201);
    public static APIGatewayProxyResponse NoContent() => BuildResponse(null, 204);
}