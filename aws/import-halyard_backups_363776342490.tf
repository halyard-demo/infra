# Brings the existing bucket halyard-backups-363776342490 under Terraform. Opened by Arcturel Assay.
# The import block reads the bucket as it is, and the resource below describes it as it is, so the plan changes nothing.
import {
  to = aws_s3_bucket.halyard_backups_363776342490
  id = "halyard-backups-363776342490"
}

resource "aws_s3_bucket" "halyard_backups_363776342490" {
  bucket = "halyard-backups-363776342490"
}
