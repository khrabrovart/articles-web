resource "aws_apigatewayv2_api" "api" {
  name          = var.api_name
  protocol_type = "HTTP"
  tags          = var.common_tags
}

resource "aws_cloudwatch_log_group" "api" {
  name              = "/aws/api_gw/${aws_apigatewayv2_api.api.name}"
  retention_in_days = 30
  tags              = var.common_tags
}
