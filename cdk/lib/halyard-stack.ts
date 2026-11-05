import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HalyardStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here (uploads for the app)

    new s3.Bucket(this, 'Uploads', {
      bucketName: 'halyard-cdk-data-uploads-a-363776342490',
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    // example resource (a person added this comment, proof 784-cdk run c)
    // const queue = new sqs.Queue(this, 'HalyardQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
