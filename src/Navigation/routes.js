import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../app';
import Homepage from '../containers/home/homePage';
import Routes from './index';
import AuthService from '../services/utils/authService';

const auth = new AuthService(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN);
console.warn('auth: ', auth);
export default (
  <Route path="/" component={App} auth={auth}>
    <IndexRoute component={Homepage} />
    {Routes.ProductRoutes()}
    {Routes.MediaRoutes()}
    {Routes.LegalRoutes()}
    {Routes.AuthRoutes()}
    {Routes.CheckoutRoutes()}
    {Routes.UserDashboardRoutes()}
    {Routes.AdminDashboardRoutes()}
    {Routes.NotFoundRoute()}
  </Route>
);
