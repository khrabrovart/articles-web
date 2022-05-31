module "s3" {
  source = "./modules/s3"

  bucket_name       = "articles-frontend"
  content_directory = "./artifacts/frontend"
  common_tags       = var.common_tags
}

module "cloudfront" {
  source = "./modules/cloudfront"

  bucket           = module.s3.bucket
  website_endpoint = module.s3.website_endpoint
  common_tags      = var.common_tags
}
