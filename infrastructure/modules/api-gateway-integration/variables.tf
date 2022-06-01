variable "api_id" {
  description = "API id"
  type        = string
}

variable "api_execution_arn" {
  description = "API execution ARN"
  type        = string
}

variable "function_name" {
  description = "Lambda function name"
  type        = string
}

variable "function_invoke_arn" {
  description = "Lambda function invoke ARN"
  type        = string
}

variable "integration_method" {
  description = "Integration method"
  type        = string
}

variable "route_key" {
  description = "API route key"
  type        = string
}
