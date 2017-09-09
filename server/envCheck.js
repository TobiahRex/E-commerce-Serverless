export default (nodeEnv) => {
  if (nodeEnv !== 'development') {
    const errorMsg = '🛑  Local Server DENIED: \nYou are in a PRODUCTION environment  🚀'.red;
    console.log(errorMsg); // eslint-disable-line no-console
    throw new Error();
  } else {
    const statusMsg = '🛠  You are in a DEVELOPMENT environment'.white;
    console.log(statusMsg); // eslint-disable-line no-console
  }
};
