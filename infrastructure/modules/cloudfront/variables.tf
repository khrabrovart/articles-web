variable "bucket" {
  description = "S3 bucket to create distribution for"
  type        = string
}

variable "website_endpoint" {
  description = "S3 website endpoint"
  type        = string
}

variable "common_tags" {
  description = "Common tags for all components"
  type        = map(string)
  default     = {}
}
