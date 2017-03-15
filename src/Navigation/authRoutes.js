import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Auth -------------------------------
import ResetPasswordEmail from '../Pages/Auth/ResetEmail/reset';
import Login from '../Pages/Auth/Login/login';
import Register from '../Pages/Auth/Register/register';
import Forgot from '../Pages/Auth/Forgot/forgot';

const authRoutes = () => (
  <div>
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
    <Route path="forgot" component={Forgot} />
    <Route path="reset_email" component={ResetPasswordEmail} />
  </div>
);

export default authRoutes;
