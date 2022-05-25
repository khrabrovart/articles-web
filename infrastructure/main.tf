module "s3" {
  source      = "./modules/s3"
  bucket_name = "articles-frontend"
  common_tags = var.common_tags
}

module "cloudfront" {
  source           = "./modules/cloudfront"
  bucket           = module.s3.bucket
  website_endpoint = module.s3.website_endpoint
  common_tags      = var.common_tags
}

/*module "lambda_comments_get" {
  source           = "./modules/lambda-function"
  function_name    = "Articles_Comments_Get"
  function_handler = "ArticlesWeb.Functions.Comments.Get::ArticlesWeb.Functions.Comments.Get.Function::Handler"
  common_tags      = var.common_tags
}

module "lambda_comments_create" {
  source           = "./modules/lambda-function"
  function_name    = "Articles_Comments_Create"
  function_handler = "ArticlesWeb.Functions.Comments.Create::ArticlesWeb.Functions.Comments.Create.Function::Handler"
  common_tags      = var.common_tags
}*/
