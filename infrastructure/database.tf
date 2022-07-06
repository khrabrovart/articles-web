module "comments_table" {
  source = "./modules/dynamodb"

  name        = "articles"
  common_tags = var.common_tags
}

module "users_table" {
  source = "./modules/dynamodb"

  name        = "users"
  common_tags = var.common_tags
}
