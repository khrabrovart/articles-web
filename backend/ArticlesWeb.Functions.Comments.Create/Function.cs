using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;
using ArticlesWeb.Core.Services;
using ArticlesWeb.Functions.Comments.Create.Models;
using ArticlesWeb.Functions.Shared;

[assembly: LambdaSerializer(typeof(DefaultLambdaJsonSerializer))]

namespace ArticlesWeb.Functions.Comments.Create;

public class Function
{
    public async Task<APIGatewayProxyResponse> Handler(APIGatewayProxyRequest apiRequest, ILambdaContext ctx)
    {
        LambdaLogger.Log(apiRequest.Body);

        var request = apiRequest.GetBody<CreateCommentRequest>();
        var service = new CommentsService();

        var comment = await service.Save(request.Content);

        return APIGatewayHelpers.BuildResponse(comment);
    }
}