using ArticlesWeb.Functions.Tests.Templates;

namespace ArticlesWeb.Functions.Tests;

public class Program
{
    public static async Task Main(string[] args)
    {
        var function = new Comments.Get.Function();

        var request = await TemplatesService.GetRequestTemplate("Comments.Get");
        request.QueryStringParameters = new Dictionary<string, string>
        {
            {"articleId", "a8033608-d032-4da2-b8b2-1587be993b4b"}
        };

        var response = await function.Handler(request, null);
    }
}