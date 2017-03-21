import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Homepage from '../Pages/Home/homePage';
import Routes from './index';

export default (
  <Route path="/" component={App}>
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
