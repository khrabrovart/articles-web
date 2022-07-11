variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "s3_name_postfix" {
  description = "S3 bucket name postfix"
  type        = string
  default     = "us"
}

variable "allowed_account_id" {
  description = "The id of the one AWS account this code is permitted to run against"
  type        = string
  default     = null
}

variable "common_tags" {
  description = "Common tags for all components"
  type        = map(string)
  default     = {}
}
