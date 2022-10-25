using Amazon.Lambda.APIGatewayEvents;

namespace ArticlesWeb.Functions.Tests.Templates;

public static class TemplatesService
{
    public static async Task<APIGatewayProxyRequest> GetRequestTemplate(string templateName)
    {
        var template = await GetRequestBodyTemplate(templateName);

        return new APIGatewayProxyRequest
        {
            Body = template
        };
    }

    private static async Task<string> GetRequestBodyTemplate(string templateName)
    {
        var templatePath = Path.Combine("Templates", $"{templateName}.json");
        var json = await File.ReadAllTextAsync(templatePath);

        return json;
    }
}