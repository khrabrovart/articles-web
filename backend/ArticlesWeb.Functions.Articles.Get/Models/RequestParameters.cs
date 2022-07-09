using Amazon.Lambda.APIGatewayEvents;

namespace ArticlesWeb.Functions.Articles.Get.Models;

public class RequestParameters
{
    private RequestParameters()
    {
    }

    public Guid? ArticleId { get; private init; }

    public ResponseMode Mode { get; private init; }

    public bool WithComments { get; private init; }

    public static RequestParameters FromAPIRequest(APIGatewayProxyRequest request)
    {
        var parameters = request.QueryStringParameters;

        return new RequestParameters
        {
            ArticleId = parameters.TryGetValue("articleId", out var ai) && Guid.TryParse(ai, out var articleId)
                ? articleId
                : null,
            Mode = parameters.TryGetValue("mode", out var m) && Enum.TryParse<ResponseMode>(m, out var mode)
                ? mode
                : ResponseMode.Full,
            WithComments = !(parameters.TryGetValue("withComments", out var wc) && bool.TryParse(wc, out var withComments)) || withComments

        };
    }

    public enum ResponseMode
    {
        Full = 0,
        Summary = 1
    }
}