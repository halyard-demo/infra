resource "aws_s3_bucket" "app_uploads" {
  bucket_prefix = "halyard-app-uploads-"
}

resource "aws_s3_bucket_public_access_block" "app_uploads" {
  bucket                  = aws_s3_bucket.app_uploads.id
  block_public_acls       = true
  ignore_public_acls      = true
  block_public_policy     = true
  restrict_public_buckets = true
}
