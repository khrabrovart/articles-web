using Amazon.Lambda.APIGatewayEvents;

namespace ArticlesWeb.Functions.Tests;

public class Program
{
    public static async Task Main(string[] args)
    {
    }

    private static async Task<APIGatewayProxyRequest> GetRequest(string templateName)
    {
        var template = await GetTemplateObject(templateName);

        return new APIGatewayProxyRequest
        {
            Body = template
        };
    }

    private static async Task<string> GetTemplateObject(string templateName)
    {
        var templatePath = Path.Combine("Templates", $"{templateName}.json");
        var json = await File.ReadAllTextAsync(templatePath);

        return json;
    }
}