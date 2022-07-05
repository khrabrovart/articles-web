using Microsoft.Extensions.Configuration;

namespace ArticlesWeb.Functions.Shared;

public interface ILambdaConfiguration
{
    IConfiguration Configuration { get; }
}