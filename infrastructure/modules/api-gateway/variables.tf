variable "api_name" {
  description = "API name"
  type        = string
}

variable "stage_name" {
  description = "API stage name"
  type        = string
}

variable "common_tags" {
  description = "Common tags for all components"
  type        = map(string)
  default     = {}
}
