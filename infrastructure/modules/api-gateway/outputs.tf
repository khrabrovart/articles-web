output "id" {
  value = aws_apigatewayv2_api.api.id
}

output "execution_arn" {
  value = aws_apigatewayv2_api.api.execution_arn
}

output "invoke_url" {
  value = aws_apigatewayv2_stage.api.invoke_url
}

output "stage_name" {
  value = aws_apigatewayv2_stage.api.name
}
