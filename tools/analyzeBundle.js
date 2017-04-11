import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import config from '../webpack.config';

config.plugins.push(new BundleAnalyzerPlugin());

const { run } = webpack(config);
run((err, stats) => {
  if (err) {
    process.stdout.write('\n');
    process.stdout.write(`❌ ${err}
`.red);
    throw err;
  } else {
    process.stdout.write('\n');
    process.stdout.write(stats.bold.green);
  }
});
