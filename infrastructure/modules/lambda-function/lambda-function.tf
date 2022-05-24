locals {
  stub_file = "${path.module}/stub-function.zip"
}

resource "aws_iam_role" "lambda" {
  name               = var.function_name
  assume_role_policy = file("${path.module}/lambda-role-policy.json")
  tags               = var.common_tags
}

resource "aws_lambda_function" "lambda" {
  function_name = var.function_name
  role          = aws_iam_role.lambda.arn

  filename         = local.stub_file
  source_code_hash = filebase64sha256(local.stub_file)

  handler = var.function_handler
  runtime = "dotnet6"
  timeout = 5

  tags = var.common_tags
}
