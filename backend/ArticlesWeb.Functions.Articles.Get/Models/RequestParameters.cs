using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Newtonsoft.Json;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class RequestParameters
{
    private RequestParameters()
    {
    }

    public Guid? ArticleId { get; private init; }

    public ResponseMode Mode { get; private init; }


    public static RequestParameters FromAPIRequest(APIGatewayProxyRequest request)
    {
        var parameters = request.QueryStringParameters;

        var parsedParameters = new RequestParameters
        {
            ArticleId = parameters.TryGetValue("articleId", out var ai)
                        && Guid.TryParse(ai, out var articleId)
                ? articleId
                : null,
            Mode = parameters.TryGetValue("mode", out var m)
                   && Enum.TryParse<ResponseMode>(m, ignoreCase: true, out var mode)
                ? mode
                : ResponseMode.Full
        };

        LambdaLogger.Log(JsonConvert.SerializeObject(parsedParameters));
        return parsedParameters;
    }

    public enum ResponseMode
    {
        Full = 0,
        Summary = 1
    }
}