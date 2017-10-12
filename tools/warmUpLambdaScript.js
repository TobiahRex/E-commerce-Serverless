// Helper script to invalidate cache in cloudFront.
// Store your cloudFront DISTRIBUTIONID in .env in root of the project.

import { exec } from 'child_process';
import colors from 'colors'; // eslint-disable-line
import webpackEnvs from './webpack.envs';

const lambdaFunctionName = process.env.NODE_ENV === 'production' ? webpackEnvs.production.LAMBDA_FUNCTION_NAME : webpackEnvs.troubleshoot.LAMBDA_FUNCTION_NAME;
const lambdaRegion = process.env.NODE_ENV === 'production' ? webpackEnvs.production.LAMBDA_REGION : webpackEnvs.troubleshoot.LAMBDA_REGION;
const lambdaPayload = process.env.NODE_ENV === 'production' ? webpackEnvs.production.LAMBDA_PAYLOAD : webpackEnvs.troubleshoot.LAMBDA_PAYLOAD;

exec(`aws lambda invoke --invocation-type RequestResponse --function-name ${lambdaFunctionName} --region ${lambdaRegion} --log-type None --payload ${lambdaPayload} lambdaOutput.json`, (err, result) => {
  if (err) {
    process.stdout.write('\n');
    process.stdout.write(`❌ ${err}
`.red);
    throw err;
  } else {
    process.stdout.write('\n');
    process.stdout.write(result.bold.green);
    process.stdout.write('\n');
    process.stdout.write(`✅  The Lambda function ${lambdaFunctionName} has been warmed Up 🔥.\n`.green.bold);
  }
});
