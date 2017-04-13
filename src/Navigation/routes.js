import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../app';
import Homepage from '../containers/home/homePage';
import Routes from './index';
import AuthService from '../services/utils/authService';

const auth = new AuthService();
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) replace({ pathname: '/login' });
};
const parseAuthHash = (nextState) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.parseHash(nextState.location.hash);
  }
};
export default (
  <Route path="/" component={App} auth={auth}>
    <IndexRoute component={Homepage} auth={auth} />
    {/* /welcome will parse the hash provided by Auth0 */}
    <Route path="/welcome" component={Homepage} onEnter={parseAuthHash} />
    {Routes.ProductRoutes()}
    {Routes.MediaRoutes()}
    {Routes.LegalRoutes()}
    {Routes.AuthRoutes(auth)}
    {Routes.CheckoutRoutes()}
    {Routes.UserDashboardRoutes(requireAuth)}
    {Routes.AdminDashboardRoutes(requireAuth)}
    {Routes.NotFoundRoute()}
  </Route>
);
