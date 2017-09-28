import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Auth -------------------------------
// import ResetPasswordEmail from '../containers/auth/ResetEmail/reset';
import Login from '../containers/auth/login/container/';
// import Register from '../containers/auth/register';
import Forgot from '../containers/auth/forgot';

function AuthRoutes(auth, parseAuthHash) {
  return (
    <div>
      <Route
        path="login"
        component={Login}
        auth={auth}
        onEnter={parseAuthHash}
      />
      <Route path="forgot" component={Forgot} />
    </div>
  );
}

export default AuthRoutes;
