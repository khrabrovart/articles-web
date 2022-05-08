# S3 bucket for redirecting non-www to www
resource "aws_s3_bucket" "root" {
  bucket = var.bucket_name
  tags   = var.common_tags
}

resource "aws_s3_bucket_policy" "root" {
  bucket = aws_s3_bucket.root.bucket
  policy = templatefile("${path.module}/templates/s3-policy.json", { bucket = var.bucket_name })
}

resource "aws_s3_bucket_website_configuration" "root" {
  bucket = aws_s3_bucket.root.bucket

  redirect_all_requests_to {
    host_name = "http://www.${var.bucket_name}.s3-website-${var.region}.amazonaws.com"
  }
}

resource "aws_s3_bucket_acl" "root" {
  bucket = aws_s3_bucket.root.bucket
  acl    = "public-read"
}
