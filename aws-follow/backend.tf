terraform {
  backend "s3" {
    bucket = "halyard-infra-tfstate-363776342490"
    key    = "aws-follow/terraform.tfstate"
    region = "us-east-1"
  }
}
