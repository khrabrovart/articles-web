locals {
  stub_file = "${path.module}/stub-function.zip"
}

resource "aws_iam_role" "lambda" {
  name               = var.function_name
  assume_role_policy = file("${path.module}/lambda-role-policy.json")
  tags               = var.common_tags
}

resource "aws_iam_role_policy_attachment" "lambda_basic_policy" {
  role       = aws_iam_role.lambda.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "lambda" {
  function_name = var.function_name
  role          = aws_iam_role.lambda.arn

  filename = local.stub_file
  //source_code_hash = filebase64sha256(local.stub_file)

  handler = var.function_handler
  runtime = "dotnet6"
  timeout = 5

  tags = var.common_tags
}

resource "aws_cloudwatch_log_group" "lambda" {
  name              = "/aws/lambda/${aws_lambda_function.lambda.function_name}"
  retention_in_days = 30
  tags              = var.common_tags
}
