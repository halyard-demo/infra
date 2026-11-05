resource "aws_s3_bucket" "follow" {
  bucket = "halyard-follow-363776342490"
}

resource "aws_s3_bucket_public_access_block" "follow" {
  bucket                  = aws_s3_bucket.follow.id
  block_public_acls       = true
  ignore_public_acls      = true
  block_public_policy     = true
  restrict_public_buckets = true
}
