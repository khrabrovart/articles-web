provider "aws" {
  profile = "khrabrovart"
  region  = var.region
}

data "aws_availability_zones" "available" {}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "3.14.0"

  name                 = "tf-vpc"
  cidr                 = "10.0.0.0/16"
  azs                  = data.aws_availability_zones.available.names
  public_subnets       = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]
  enable_dns_hostnames = true
  enable_dns_support   = true
}

resource "aws_db_subnet_group" "tf_rds_subnet_group" {
  name       = "tf-rds-subnet-group"
  subnet_ids = module.vpc.public_subnets

  tags = {
    Name = "Terraform RDS subnet group"
  }
}

resource "aws_security_group" "tf_rds_sg" {
  name   = "tf-rds-sg"
  vpc_id = module.vpc.vpc_id

  ingress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "Terraform RDS security group"
  }
}

resource "aws_db_parameter_group" "tf_rds_pg" {
  name   = "tf-rds-pg"
  family = "postgres13"

  parameter {
    name  = "log_connections"
    value = "1"
  }
}

resource "aws_db_instance" "tf_rds" {
  identifier             = "tf-rds"
  instance_class         = "db.t3.micro"
  allocated_storage      = 20
  engine                 = "postgres"
  engine_version         = "13.4"
  username               = "kha"
  password               = var.db_password
  db_subnet_group_name   = aws_db_subnet_group.tf_rds_subnet_group.name
  vpc_security_group_ids = [aws_security_group.tf_rds_sg.id]
  parameter_group_name   = aws_db_parameter_group.tf_rds_pg.name
  publicly_accessible    = true
  skip_final_snapshot    = true
}