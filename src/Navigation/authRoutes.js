import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Auth -------------------------------
import ResetPasswordEmail from '../containers/auth/ResetEmail/reset';
import Login from '../containers/auth/login';
import Register from '../containers/auth/register';
import Forgot from '../containers/auth/Forgot/forgot';

function AuthRoutes(auth) {
  const parseAuthHash = (nextState) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      console.warn('at authRoutes.js\n', 'nextState.location.hash: ', nextState.locaiton.hash);
      auth.parseHash(nextState.location.hash);
    }
  };

  return (
    <div>
      <Route
        path="login"
        component={Login}
        onEnter={parseAuthHash}
        auth={auth}
      />
      <Route path="register" component={Register} auth={auth} />
      <Route path="forgot" component={Forgot} />
      <Route path="reset_email" component={ResetPasswordEmail} />
    </div>
  );
}

export default AuthRoutes;
