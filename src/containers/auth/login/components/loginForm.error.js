import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const defaultProps = {
  errorMessage: 'No Error',
};
const propTypes = {
  errorMessage: PropTypes.string,
};

function LoginFormError({ errorMessage }) {
  console.warn('error from Auth0: ', errorMessage);
  return (
    <div className="sign-in__error">
      <div className="error--icon">
        <FontAwesome name="plus" />
      </div>
      {/* <h5>Invalid Username or Password</h5> */}
      {/* <h5>You entered an invalid email format.  Please provide a valid email and re-submit.
        <br />
        Example: <i>batman@wayne.enterprises.com</i>
      </h5> */}
      <h5>{errorMessage || 'No Error'}</h5>
    </div>
  );
}
LoginFormError.defaultProps = defaultProps;
LoginFormError.propTypes = propTypes;
export default LoginFormError;
