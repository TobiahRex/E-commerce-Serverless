import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

function LoadingOrError({ errorMessage, authInProgress }) {
  if (errorMessage) {
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
  } else if (authInProgress) {
    return (<div className="sign-in__loading">
      <div className="loading--icon">
        <FontAwesome name="" />
      </div>
    </div>);
  }
}
LoadingOrError.propTypes = {
  errorMessage: PropTypes.string,
  authInProgress: PropTypes.bool,
};
LoadingOrError.defaultProps = {
  errorMessage: 'No Error',
  authInProgress: false,
};
export default LoadingOrError;
