resource "aws_cloudfront_distribution" "cdn" {
  dynamic "origin" {
    for_each = var.origins

    content {
      domain_name = origin.value.domain_name
      origin_path = origin.value.origin_path
      origin_id   = origin.value.origin_id

      custom_origin_config {
        http_port              = origin.value.custom_origin_config.http_port
        https_port             = origin.value.custom_origin_config.https_port
        origin_protocol_policy = origin.value.custom_origin_config.origin_protocol_policy
        origin_ssl_protocols   = origin.value.custom_origin_config.origin_ssl_protocols
      }
    }
  }

  default_cache_behavior {
    allowed_methods  = var.default_cache_behavior.allowed_methods
    cached_methods   = var.default_cache_behavior.cached_methods
    target_origin_id = var.default_cache_behavior.target_origin_id

    viewer_protocol_policy = var.default_cache_behavior.viewer_protocol_policy
    min_ttl                = var.default_cache_behavior.min_ttl
    default_ttl            = var.default_cache_behavior.default_ttl
    max_ttl                = var.default_cache_behavior.max_ttl
    compress               = var.default_cache_behavior.compress

    forwarded_values {
      query_string = var.default_cache_behavior.forwarded_values.query_string

      cookies {
        forward = var.default_cache_behavior.forwarded_values.cookies.forward
      }
    }
  }

  dynamic "ordered_cache_behavior" {
    for_each = var.ordered_cache_behaviors

    content {
      path_pattern     = ordered_cache_behavior.value.path_pattern
      allowed_methods  = ordered_cache_behavior.value.allowed_methods
      cached_methods   = ordered_cache_behavior.value.cached_methods
      target_origin_id = ordered_cache_behavior.value.target_origin_id

      viewer_protocol_policy = ordered_cache_behavior.value.viewer_protocol_policy
      min_ttl                = ordered_cache_behavior.value.ttl
      default_ttl            = ordered_cache_behavior.value.ttl
      max_ttl                = ordered_cache_behavior.value.ttl
      compress               = ordered_cache_behavior.value.compress

      forwarded_values {
        query_string = ordered_cache_behavior.value.forwarded_values.query_string

        cookies {
          forward = ordered_cache_behavior.value.forwarded_values.cookies.forward
        }
      }
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_100"

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
      locations        = []
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  tags = var.common_tags
}
