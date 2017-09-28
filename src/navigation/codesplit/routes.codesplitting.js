import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import { replace, push } from 'react-router-redux';
import App from '../App';
import Routes from './index';
import AuthService from '../services/utils/authService';

export const auth = new AuthService();
// const requireAuth = () => {
//   if (!auth.loggedIn()) {
//     replace({ pathname: '/login' });
//     push('/login');
//   }
// };
const parseAuthHash = (nextState) => {
  const hash = nextState.location.hash;
  if (/access_token|id_token|error/.test(hash)) {
    auth.parseHash(hash);
  }
};
const errorLoading = (error) => {
  throw new Error(`Dynamic page loading failed.
  ERROR: ${error}`);
};
const loadRoute = cb => module => cb(null, module.default);

export default (
  <Route path="/" component={App} auth={auth}>
    <IndexRoute
      getComponent={(location, cb) => {
        import('../containers/splash' /* webpackChunkName: "homePage" */)
        .then(loadRoute(cb))
        .catch(errorLoading);
      }}
    />
    {Routes.ProductRoutes()}
    {Routes.MediaRoutes()}
    {Routes.InfoRoutes()}
    {Routes.AuthRoutes(auth, parseAuthHash)}
    {Routes.CheckoutRoutes()}
    {Routes.NotFoundRoute()}
    {Routes.TrackingRoute()}
    {/* {Routes.UserDashboardRoutes(requireAuth)} */}
    {/* {Routes.AdminDashboardRoutes(requireAuth)} */}
  </Route>
);
