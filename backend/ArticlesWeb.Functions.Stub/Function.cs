using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;

[assembly: LambdaSerializer(typeof(DefaultLambdaJsonSerializer))]

namespace ArticlesWeb.Functions.Stub;

public class Function
{
    public string Handler(string input, ILambdaContext ctx) => $"Function '{ctx.FunctionName}': {input}";
}