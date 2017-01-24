import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../Containers/App';
import Things from '../Containers/Things';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Things} />
  </Route>
);
