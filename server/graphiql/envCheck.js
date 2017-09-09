import colors from 'colors';

export default (nodeEnv) => {
  if (nodeEnv !== 'development') {
    console.log(colors.bold.underline.red('\n🚨  Local Server DENIED: \nYou are in a PRODUCTION environment  🚀 \n')); // eslint-disable-line no-console
    throw new Error();
  } else {
    console.log(colors.bold.underline.white('\n🛠  You are in a DEVELOPMENT environment\n')); // eslint-disable-line no-console
  }
};
