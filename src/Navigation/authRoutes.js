import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Auth -------------------------------
import ResetPasswordEmail from '../containers/auth/ResetEmail/reset';
import Login from '../containers/auth/Login';
import Register from '../containers/auth/Register/register';
import Forgot from '../containers/auth/Forgot/forgot';

function AuthRoutes(auth) {
  return (
    <div>
      <Route path="login" component={Login} auth={auth} />
      <Route path="register" component={Register} />
      <Route path="forgot" component={Forgot} />
      <Route path="reset_email" component={ResetPasswordEmail} />
    </div>
  );
}

export default AuthRoutes;
