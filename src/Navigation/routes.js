import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Homepage from '../Pages/Home/homePage';
import {
  Legal,
  Auth,
  UserDashboard,
  Checkout,
  Media,
  Products,
  AdminDashboard,
  NotFound,
} from './';

export default (
  <Route path="/" component={App}>
    <IndexRoute path="/" component={Homepage} />
    <Products />
    <Media />
    <Legal />
    <Auth />
    <Checkout />
    <UserDashboard />
    <AdminDashboard />
    <NotFound />
  </Route>
);
