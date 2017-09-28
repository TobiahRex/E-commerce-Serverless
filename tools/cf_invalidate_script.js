// Helper script to invalidate cache in cloudFront.
// Store your cloudFront DISTRIBUTIONID in .env in root of the project.

import { exec } from 'child_process';
import colors from 'colors'; // eslint-disable-line
import webpackEnvs from './webpack.envs';

const distributionId = process.env.NODE_ENV === 'production' ? webpackEnvs.production.DISTRIBUTION_ID : webpackEnvs.troubleshoot.DISTRIBUTION_ID;

exec(`aws cloudfront create-invalidation --distribution-id ${distributionId} --paths '/*'`, (err, result) => {
  if (err) {
    process.stdout.write('\n');
    process.stdout.write(`❌ ${err}
`.red);
    throw err;
  } else {
    process.stdout.write('\n');
    process.stdout.write(result.bold.green);
    process.stdout.write('\n');
    process.stdout.write('✅  Your app has been successfully deployed.\n'.green.bold);
  }
});
