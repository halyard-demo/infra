resource "aws_db_instance" "ledger" {
  identifier              = "halyard-migrate-ledger"
  engine                  = "postgres"
  engine_version          = "18.3"
  instance_class          = "db.t4g.micro"
  allocated_storage       = 20
  storage_type            = "gp3"
  db_name                 = "ledger"
  username                = "ledger_admin"
  password                = var.db_password
  publicly_accessible     = false
  multi_az                = false
  backup_retention_period = 0
  skip_final_snapshot     = true

  tags = {
    Name = "halyard-migrate-ledger"
  }
}
