resource "aws_s3_bucket" "frontend" {
  bucket = var.bucket_name
  tags   = var.common_tags
}

resource "aws_s3_object" "some_file" {
  bucket = aws_s3_bucket.frontend.bucket
  key    = "test.txt"
  source = "${path.module}/templates/s3-policy.json"

  etag = filemd5("${path.module}/templates/s3-policy.json")
}

resource "aws_s3_object" "directory_content" {
  for_each = fileset(var.content_directory, "**")

  bucket = aws_s3_bucket.frontend.bucket
  key    = each.value
  source = "${var.content_directory}/${each.value}"

  etag = filemd5("${var.content_directory}/${each.value}")
}

resource "aws_s3_bucket_policy" "frontend" {
  bucket = aws_s3_bucket.frontend.bucket
  policy = templatefile("${path.module}/templates/s3-policy.json", { bucket = var.bucket_name })
}

resource "aws_s3_bucket_website_configuration" "frontend" {
  bucket = aws_s3_bucket.frontend.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_acl" "frontend" {
  bucket = aws_s3_bucket.frontend.bucket
  acl    = "public-read"
}
