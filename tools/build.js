import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import colors from 'colors';

process.stdout.write('⏲  Generating minified bundle for production via Webpack. This will take a moment...\n'.white.bold);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    process.stdout.write(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    process.stdout.write('Webpakc generated the following errors: '.red.bold);
    return jsonStats.errors.map(error => process.stdout.write(`❌ ${error}
`.red));
  }

  if (jsonStats.hasWarnings) {
    process.stdout.write('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning =>
      process.stdout.write(`☢️ ${warning}
`.yellow));
  }
  process.stdout.write(`Webpack stats: ${stats}
`.cyan);
  process.stdout.write('✅  Your app has been compiled in production mode and written to "/dist".\n'.green.bold);
  return 0;
});
