#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { HalyardDataStack } from '../lib/halyard-data-stack'

const app = new cdk.App()
// The bootstrap-version rule is off: this app is deployed without `cdk bootstrap` (no assets).
new HalyardDataStack(app, 'HalyardData', {
  stackName: 'halyard-cdk-data',
  synthesizer: new cdk.DefaultStackSynthesizer({ generateBootstrapVersionRule: false }),
})
