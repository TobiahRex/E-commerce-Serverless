import React from 'react';
import { Route } from 'react-router';

// ----------------------------- Auth -------------------------------
// import ResetPasswordEmail from '../containers/auth/ResetEmail/reset';
// import Register from '../containers/auth/register';

const errorLoading = (error) => {
  throw new Error(`Dynamic page loading failed ${error}`);
};
const loadRoute = cb => module => cb(null, module.default);


function AuthRoutes(auth, parseAuthHash) {
  return (
    <div>
      <Route
        path="login"
        getComponent={(_, cb) => {
          import('../containers/auth/login/container/' /* webpackChunkName: "login" */)
          .then(loadRoute(cb))
          .catch(errorLoading);
        }}
        auth={auth}
        onEnter={parseAuthHash}
      />
      <Route
        path="forgot"
        getComponent={(_, cb) => {
          import('../containers/auth/forgot' /* webpackChunkName: "login" */)
          .then(loadRoute(cb))
          .catch(errorLoading);
        }}
        auth={auth}
        onEnter={parseAuthHash}
      />
      {/* <Route path="register" component={Register} auth={auth} /> */}
      {/* <Route path="reset_email" component={ResetPasswordEmail} /> */}
    </div>
  );
}

export default AuthRoutes;
