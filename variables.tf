variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "db_password" {
  description   = "DB password"
  type          = string
  sensitive     = true
}