import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const defaultProps = {
  error: '',
};

const propTypes = {
  error: PropTypes.string,
};

function LoginFormError({ error }) {
  error.test('')
  return (
    <div className="sign-in__error">
      <div className="error--icon">
        <FontAwesome name="plus" />
      </div>
      {/* <h5>Invalid Username or Password</h5> */}
      <h5>You entered an invalid email format.  Please provide a valid email and re-submit.
        <br />
        Example: <i>batman@wayne.enterprises.com</i>
      </h5>
    </div>
  );
}
LoginFormError.defaultProps = defaultProps;
LoginFormError.propTypes = propTypes;
export default LoginFormError;
