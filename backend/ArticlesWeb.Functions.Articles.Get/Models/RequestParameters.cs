using Amazon.Lambda.APIGatewayEvents;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class RequestParameters
{
    public RequestParameters(APIGatewayProxyRequest request)
    {
        var parameters = request.QueryStringParameters;

        ArticleId = parameters.TryGetValue("articleId", out var ai) && Guid.TryParse(ai, out var articleId)
            ? articleId
            : null;
    }

    public Guid? ArticleId { get; }
}