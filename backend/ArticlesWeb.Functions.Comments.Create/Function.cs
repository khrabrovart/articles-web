using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;

[assembly: LambdaSerializer(typeof(DefaultLambdaJsonSerializer))]

namespace ArticlesWeb.Functions.Comments.Create;

public class Function
{
    public string[] Handler(string input, ILambdaContext ctx)
    {
        return new[]
        {
            "Comment 1",
            "Comment 2",
            input
        };
    }
}