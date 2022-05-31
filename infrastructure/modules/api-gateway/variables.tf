variable "api_name" {
  description = "API name"
  type        = string
}

variable "common_tags" {
  description = "Common tags for all components"
  type        = map(string)
  default     = {}
}
