# aws_db_instance.ledger is replaced by aws_db_instance.ledger_enc, the encrypted copy halyard-migrate-ledger-enc (migration task task-1). Opened by Arcturel Assay.
resource "aws_db_instance" "ledger_enc" {
  identifier              = "halyard-migrate-ledger-enc"
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
  storage_encrypted = true

  lifecycle {
    ignore_changes = [password]
  }
}

import {
  to = aws_db_instance.ledger_enc
  id = "halyard-migrate-ledger-enc"
}

removed {
  from = aws_db_instance.ledger

  lifecycle {
    destroy = false
  }
}
