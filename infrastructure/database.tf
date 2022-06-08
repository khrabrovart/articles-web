module "comments_table" {
  source = "./modules/dynamodb"

  name        = "comments"
  common_tags = var.common_tags
}
