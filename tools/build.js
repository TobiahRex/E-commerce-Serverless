import webpack from 'webpack';
import colors from 'colors'; //eslint-disable-line
import webpackConfig from '../webpack.config';

process.stdout.write('\n⏲  Generating minified bundle for production via Webpack. This will take a moment...\n'.white.bold);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    process.stdout.write(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.errors.length !== 0) {
    process.stdout.write('\nWebpack generated the following errors: '.red.bold);
    jsonStats.errors.map(error => process.stderr.write(`
      ❌ ${error}
    `.red));
    throw jsonStats.errors;
  }

  if (jsonStats.warnings.length !== 0) {
    process.stdout.write('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning =>
      process.stdout.write(`
        ☢️ ${warning}
      `.yellow));
  }
  process.stdout.write(`
    Webpack stats:
    ${stats}
  `.cyan);
  process.stdout.write(`
    ✅  Your app has been compiled in production mode and written to "/dist".
  `.green.white);

  return 0;
});
