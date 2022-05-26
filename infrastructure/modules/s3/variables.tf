variable "bucket_name" {
  description = "The S3 bucket name for the static content"
  type        = string
}

variable "content_directory" {
  description = "Directory to upload content from"
  type        = string
}

variable "common_tags" {
  description = "Common tags for all components"
  type        = map(string)
  default     = {}
}
