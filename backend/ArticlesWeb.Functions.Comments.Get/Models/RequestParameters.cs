using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Newtonsoft.Json;

namespace ArticlesWeb.Functions.Comments.Get.Models;

public class RequestParameters
{
    private RequestParameters()
    {
    }

    public Guid? ArticleId { get; private init; }

    public static RequestParameters FromAPIRequest(APIGatewayProxyRequest request)
    {
        var parameters = request.QueryStringParameters;

        var parsedParameters = new RequestParameters
        {
            ArticleId = parameters.TryGetValue("articleId", out var ai) && Guid.TryParse(ai, out var articleId)
                ? articleId
                : null
        };

        LambdaLogger.Log(JsonConvert.SerializeObject(parsedParameters));
        return parsedParameters;
    }
}