using System.Text.Json;
using Amazon.Lambda.APIGatewayEvents;

namespace ArticlesWeb.Functions.Shared;

public static class APIGatewayHelpers
{
    private static readonly JsonSerializerOptions SerializerOptions = new()
    {
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
    };

    public static T GetBody<T>(this APIGatewayProxyRequest request) =>
        JsonSerializer.Deserialize<T>(request.Body, SerializerOptions);
}