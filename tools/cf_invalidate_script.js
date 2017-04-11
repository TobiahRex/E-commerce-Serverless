// Helper script to invalidate cache in cloudFront.
// Store your cloudFront DISTRIBUTIONID in .env in root of the project.

import { exec } from 'child_process';
import dotenv from 'dotenv';

dotenv.load({ silent: true });

console.log(dotenv);

exec(`aws cloudfront create-invalidation --distribution-id ${process.env.DISTRIBUTIONID} --paths '/*'`, function (err, stdout) {
  if (err) throw err;
  console.log(stdout);
});
