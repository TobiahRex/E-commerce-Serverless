/* eslint-disable no-console */
const logErrors = {
  applyAfterware({ response }, next) {
    if (!response.ok) {
      response
      .clone()
      .text()
      .then((bodyText) => {
        console.error(`Network Error:
          ${response.status} (${response.statusText}) - ${bodyText}`);
        next();
      });
    } else {
      response
      .clone()
      .json()
      .then(({ errors }) => {
        if (errors) {
          console.error('GraphQL Errors:\n', errors.map(e => e.message));
        }
        next();
      });
    }
  },
};

export default logErrors;
