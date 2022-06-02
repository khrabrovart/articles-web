using Amazon.Lambda.APIGatewayEvents;
using ArticlesWeb.Functions.Comments.Get;

namespace ArticlesWeb.Functions.Tests;

public class Program
{
    public static async Task Main(string[] args)
    {
        var function = new Function();

        var request = await GetRequest(function.GetType().Namespace);
        var response = await function.Handler(request, null);

        Console.WriteLine($"Status code: {response.StatusCode}\n" +
                          $"Response: {response.Body}");
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