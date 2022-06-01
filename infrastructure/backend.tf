locals {
  functions = {
    Articles_Comments_Get = {
      project_name = "ArticlesWeb.Functions.Comments.Get"
      http_method  = "GET"
      http_route   = "/comments"
    },
    Articles_Comments_Create = {
      project_name = "ArticlesWeb.Functions.Comments.Create"
      http_method  = "POST"
      http_route   = "/comments"
    }
  }
}

module "lambda_functions" {
  source = "./modules/lambda-function"

  for_each = local.functions

  function_name       = each.key
  function_source_dir = "./artifacts/backend/${each.value.project_name}"
  function_handler    = "${each.value.project_name}::${each.value.project_name}.Function::Handler"
  common_tags         = var.common_tags
}

module "api_gateway" {
  source = "./modules/api-gateway"

  api_name    = "Articles_Lambda_Api"
  common_tags = var.common_tags
}

/* module "api_gateway_integration" {
  source = "./modules/api-gateway-integration"

  for_each = local.functions

  api_id            = module.api_gateway.id
  api_execution_arn = module.api_gateway.execution_arn

  function_name       = each.key
  function_invoke_arn = module.lambda_functions[each.key].invoke_arn

  integration_method = each.value.http_method
  route_key          = "${each.value.http_method} ${each.value.http_route}"
} */
