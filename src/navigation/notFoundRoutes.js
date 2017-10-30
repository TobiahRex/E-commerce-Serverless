import React from 'react';
import { Route, Redirect } from 'react-router';
import NotFound from '../containers/404/index';

const NotFoundRoute = () => (
  <div>
    <Route path="/404" component={NotFound} />
    <Redirect from="*" to="/404" />
  </div>
);
export default NotFoundRoute;
