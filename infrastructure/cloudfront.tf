locals {
  origins = [
    {
      domain_name = module.s3.website_endpoint
      origin_path = null
      origin_id   = module.s3.bucket

      custom_origin_config = {
        http_port              = 80
        https_port             = 443
        origin_protocol_policy = "http-only"
        origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
      }
    },
    {
      domain_name = replace(module.api_gateway.invoke_url, "/^https?://([^/]*).*/", "$1")
      origin_path = "/${module.api_gateway.stage_name}"
      origin_id   = "api"

      custom_origin_config = {
        http_port              = 80
        https_port             = 443
        origin_protocol_policy = "https-only"
        origin_ssl_protocols   = ["TLSv1.2"]
      }
    }
  ]
}

module "cloudfront" {
  source = "./modules/cloudfront"

  origins = local.origins

  default_cache_behavior = {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = module.s3.bucket

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 31536000
    default_ttl            = 31536000
    max_ttl                = 31536000
    compress               = true

    forwarded_values = {
      query_string = false

      cookies = {
        forward = "none"
      }
    }
  }

  ordered_cache_behavior = {
    path_pattern     = "/api/*"
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "api"

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
    compress               = false

    forwarded_values = {
      query_string = true

      cookies = {
        forward = "all"
      }
    }
  }

  common_tags = var.common_tags
}
