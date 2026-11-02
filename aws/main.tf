resource "aws_s3_bucket" "app_uploads" {
  bucket_prefix = "halyard-app-uploads-"
}

resource "aws_ebs_volume" "scratch" {
  availability_zone = "us-east-1a"
  size              = 1
  type              = "gp3"
  encrypted         = true
  tags = {
    Name = "halyard-scratch"
  }
}
