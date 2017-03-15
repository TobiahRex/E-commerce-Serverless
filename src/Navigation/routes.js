import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Homepage from '../Pages/Home/homePage';
import {
  LegalRoutes,
  AuthRoutes,
  UserDashboardRoutes,
  CheckoutRoutes,
  MediaRoutes,
  ProductRoutes,
  AdminDashboardRoutes,
  NotFoundRoute,
} from './index';

console.log('UserDashboardRoutes: ', UserDashboardRoutes);

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    {ProductRoutes()}
    {MediaRoutes()}
    {LegalRoutes()}
    {AuthRoutes()}
    {CheckoutRoutes()}
    {UserDashboardRoutes()}
    {AdminDashboardRoutes()}
    {NotFoundRoute()}
  </Route>
);
