import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket");
const bucketPublicAccessBlock = new aws.s3.BucketPublicAccessBlock("my-bucket-public-access-block", {
    bucket: bucket.id,
    blockPublicAcls: false,
    blockPublicPolicy: true,
    ignorePublicAcls: true,
    restrictPublicBuckets: false,
});

// Export the name of the bucket
export const bucketName = bucket.id;
