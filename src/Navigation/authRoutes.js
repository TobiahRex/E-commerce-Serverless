import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Auth -------------------------------
import ResetPasswordEmail from '../containers/auth/ResetEmail/reset';
import Login from '../containers/auth/Login/login';
import Register from '../containers/auth/Register/register';
import Forgot from '../containers/auth/Forgot/forgot';

const AuthRoutes = () => (
  <div>
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
    <Route path="forgot" component={Forgot} />
    <Route path="reset_email" component={ResetPasswordEmail} />
  </div>
);

export default AuthRoutes;
