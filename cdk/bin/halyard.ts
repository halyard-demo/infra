#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import * as s3 from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs'

// The data stack: uploads for the app. Arcturel proof 529-cdk.
class HalyardDataStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // Customer uploads. Keep the data when the stack goes.
    new s3.Bucket(this, 'Uploads', {
      bucketName: 'halyard-cdk-data-uploads-a-363776342490',
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    })
  }
}

const app = new cdk.App()
// The bootstrap-version rule is off: this app is deployed without `cdk bootstrap` (no assets).
new HalyardDataStack(app, 'HalyardData', {
  stackName: 'halyard-cdk-data',
  synthesizer: new cdk.DefaultStackSynthesizer({ generateBootstrapVersionRule: false }),
})
