using Amazon.Lambda.APIGatewayEvents;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class RequestParameters
{
    private RequestParameters()
    {
    }

    public Guid? ArticleId { get; private init; }

    public static RequestParameters FromAPIRequest(APIGatewayProxyRequest request)
    {
        var parameters = request.QueryStringParameters;

        if (parameters == null)
        {
            return null;
        }

        return new RequestParameters
        {
            ArticleId = parameters.TryGetValue("articleId", out var ai) && Guid.TryParse(ai, out var articleId)
                ? articleId
                : null
        };
    }
}