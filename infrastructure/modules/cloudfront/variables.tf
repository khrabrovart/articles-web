variable "origins" {
  description = "Cloudfront origins"
  type        = list(any)
}

variable "default_cache_behavior" {
  description = "Cloudfront default cache behavior"
  type        = any
}

variable "ordered_cache_behaviors" {
  description = "Cloudfront ordered cache behaviors"
  type        = list(any)
}

variable "common_tags" {
  description = "Common tags for all components"
  type        = map(string)
  default     = {}
}
