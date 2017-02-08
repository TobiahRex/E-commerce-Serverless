import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navbar from '../Pages/Navbar/navbarComponents/navbarMain';

export default (
  <Route path="/" component={Navbar}>
    {/* <IndexRoute component={Things} /> */}
  </Route>
);
