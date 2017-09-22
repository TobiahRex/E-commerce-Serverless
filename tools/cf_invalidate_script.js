// Helper script to invalidate cache in cloudFront.
// Store your cloudFront DISTRIBUTIONID in .env in root of the project.

import { exec } from 'child_process';
import dotenv from 'dotenv';
import colors from 'colors'; // eslint-disable-line
import path from 'path';

<<<<<<< HEAD
dotenv.load({ path: path.resolve('.env-dev') });
=======
dotenv.config({ silent: true, path: path.resolve('.env-dev') });
>>>>>>> nj2jp-development

exec(`aws cloudfront create-invalidation --distribution-id ${process.env.DISTRIBUTIONID} --paths '/*'`, (err, result) => {
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
