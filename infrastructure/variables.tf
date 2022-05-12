variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "common_tags" {
  description = "Common tags for all components"
  type        = map(string)
  default     = {}
}
