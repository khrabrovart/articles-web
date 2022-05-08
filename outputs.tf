output "rds_hostname" {
  description = "RDS instance hostname"
  value       = aws_db_instance.tf_rds.address
  sensitive   = true
}

output "rds_port" {
  description = "RDS instance port"
  value       = aws_db_instance.tf_rds.port
  sensitive   = true
}

output "rds_username" {
  description = "RDS instance root username"
  value       = aws_db_instance.tf_rds.username
  sensitive   = true
}