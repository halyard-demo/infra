import * as cdk from 'aws-cdk-lib'
import * as s3 from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs'

// How much public access the uploads bucket blocks (a value, not written inline).
const blockLevel = s3.BlockPublicAccess.BLOCK_ACLS

// The data stack: uploads for the app. Arcturel proof 529-cdk.
export class HalyardDataStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // Customer uploads. Keep the data when the stack goes.
    new s3.Bucket(this, 'Uploads', {
      bucketName: 'halyard-cdk-data-uploads-a-363776342490',
      blockPublicAccess: blockLevel,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    })
  }
}
