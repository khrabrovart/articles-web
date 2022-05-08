# S3 bucket for the static content (frontend)
resource "aws_s3_bucket" "www" {
  bucket = "www.${var.bucket_name}"
  tags   = var.common_tags
}

resource "aws_s3_bucket_policy" "www" {
  bucket = aws_s3_bucket.www.bucket
  policy = templatefile("${path.module}/templates/s3-policy.json", { bucket = "www.${var.bucket_name}" })
}

resource "aws_s3_bucket_website_configuration" "www" {
  bucket = aws_s3_bucket.www.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

resource "aws_s3_bucket_cors_configuration" "www" {
  bucket = aws_s3_bucket.www.bucket

  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET", "POST"]
    allowed_origins = ["http://www.${var.bucket_name}.s3-website-${var.region}.amazonaws.com"]
    max_age_seconds = 3000
  }
}

resource "aws_s3_bucket_acl" "www" {
  bucket = aws_s3_bucket.www.bucket
  acl    = "public-read"
}
