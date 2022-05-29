resource "aws_s3_bucket" "frontend" {
  bucket = var.bucket_name
  tags   = var.common_tags
}

module "template_files" {
  source   = "hashicorp/dir/template"
  base_dir = var.content_directory
}

resource "aws_s3_object" "frontend_content" {
  for_each = module.template_files.files

  bucket = aws_s3_bucket.frontend.bucket

  key          = each.key
  content_type = each.value.content_type
  source       = each.value.source_path
  etag         = each.value.digests.md5

  lifecycle {
    ignore_changes = [
      tags,
      metadata,
    ]
    create_before_destroy = true
  }
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
