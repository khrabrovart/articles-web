locals {
  functions = {
    articles_comments_get = {
      name        = "Articles_Comments_Get"
      source_dir  = "./artifacts/backend/ArticlesWeb.Functions.Comments.Get"
      handler     = "ArticlesWeb.Functions.Comments.Get::ArticlesWeb.Functions.Comments.Get.Function::Handler"
      http_method = "GET"
      http_route  = "/comments"
    },
    articles_comments_create = {
      name        = "Articles_Comments_Create"
      source_dir  = "./artifacts/backend/ArticlesWeb.Functions.Comments.Create"
      handler     = "ArticlesWeb.Functions.Comments.Create::ArticlesWeb.Functions.Comments.Create.Function::Handler"
      http_method = "POST"
      http_route  = "/comments"
    }
  }
}

module "lambda_functions" {
  source = "./modules/lambda-function"

  for_each = local.functions

  function_name       = each.value.name
  function_source_dir = each.value.source_dir
  function_handler    = each.value.handler
  common_tags         = var.common_tags
}

module "api_gateway" {
  source = "./modules/api-gateway"

  api_name    = "Articles_Lambda_Api"
  common_tags = var.common_tags
}

module "api_gateway_integration" {
  source = "./modules/api-gateway-integration"

  for_each = local.functions

  api_id            = module.api_gateway.id
  api_execution_arn = module.api_gateway.execution_arn

  function_name       = each.value.name
  function_invoke_arn = module.lambda_functions[each.key].invoke_arn

  integration_method = each.value.http_method
  route_key          = "${each.value.http_method} ${each.value.http_route}"
}
