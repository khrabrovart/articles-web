module "s3" {
  source      = "./modules/s3"
  region      = var.region
  bucket_name = var.bucket_name
  common_tags = var.common_tags
}
