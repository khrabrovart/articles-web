module "s3" {
  source = "./modules/s3"

  bucket_name       = "articles-frontend"
  content_directory = "./artifacts/frontend"
  common_tags       = var.common_tags
}
