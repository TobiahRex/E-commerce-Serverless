import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const defaultProps = {
  error: [],
};

const propTypes = {
  error: PropTypes.objectOf(PropTypes.any),
};

function LoginFormError({ error }) {
  console.warn('error from Auth0: ', error);
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
      <h5>{error}</h5>
    </div>
  );
}
LoginFormError.defaultProps = defaultProps;
LoginFormError.propTypes = propTypes;
export default LoginFormError;
