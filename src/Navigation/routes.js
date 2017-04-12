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

export default (
  <Route path="/" component={App} auth={auth}>
    <IndexRoute component={Homepage} />
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
