import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navbar from '../Pages/Navbar/navbarComponents/navbarMain';
import Things from '../Containers/Things';

export default (
  <Route path="/" component={Navbar}>
    {/* <IndexRoute component={Things} /> */}
  </Route>
);
