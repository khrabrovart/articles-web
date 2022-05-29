variable "function_name" {
  description = "Lambda function name"
  type        = string
}

variable "function_source_file" {
  description = "Lambda function source file"
  type        = string
}

variable "function_handler" {
  description = "Lambda function handler"
  type        = string
}

variable "common_tags" {
  description = "Common tags for all components"
  type        = map(string)
  default     = {}
}
