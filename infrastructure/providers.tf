terraform {
  required_version = ">= 1.1.9"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.13.0"
    }
  }

  backend "s3" {
    bucket  = "kha-terraform-states"
    key     = "articles/terraform.tfstate"
    region  = "us-east-1"
    profile = "khrabrovart-tf"
  }
}

provider "aws" {
  profile = "khrabrovart-tf"
  region  = var.region
}
