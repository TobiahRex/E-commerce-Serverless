import React from 'react';
import { Route } from 'react-router';
import NotFound from '../containers/404/notFound404';

const NotFoundRoute = () => (<Route path="/404" component={NotFound} />);
export default NotFoundRoute;
