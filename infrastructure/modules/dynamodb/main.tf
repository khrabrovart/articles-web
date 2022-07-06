resource "aws_dynamodb_table" "db_table" {
  name         = var.name
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "id"
  tags         = var.common_tags

  attribute {
    name = "id"
    type = "S"
  }
}
