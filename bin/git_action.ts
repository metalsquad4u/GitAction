#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { GitActionStack } from '../lib/git_action-stack';

const app = new cdk.App();
new GitActionStack(app, 'GitActionStack', {

  env: { 
    account: '683578897984', 
    region: 'us-east-1' },

    /****We are adding more line to test the automatic pull request */
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});