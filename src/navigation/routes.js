import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import { replace, push } from 'react-router-redux';
import App from '../App';
import Routes from './index';
import AuthService from '../services/utils/authService';
import Splash from '../containers/splash';

export const auth = new AuthService();

const parseAuthHash = (nextState) => {
  const hash = nextState.location.hash;
  if (/access_token|id_token|error/.test(hash)) {
    auth.parseHash(hash);
  }
};

export default (
  <Route path="/" component={App} auth={auth}>
    <IndexRoute component={Splash} />
    {Routes.ProductRoutes()}
    {Routes.MediaRoutes()}
    {Routes.InfoRoutes()}
    {Routes.AuthRoutes(auth, parseAuthHash)}
    {Routes.CheckoutRoutes()}
    {Routes.TrackingRoute()}
    {Routes.NotFoundRoute()}
    {/* {Routes.UserDashboardRoutes(requireAuth)} */}
    {/* {Routes.AdminDashboardRoutes(requireAuth)} */}
  </Route>
);

/* TODO MVP2
const requireAuth = () => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
    push('/login');
  }
};
*/
