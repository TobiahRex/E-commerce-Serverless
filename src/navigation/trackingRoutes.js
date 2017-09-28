import React from 'react';
import { Route } from 'react-router';

import Tracking from '../containers/tracking';

const ProductRoutes = () => (
  <div>
    <Route
      path="/tracking"
      component={Tracking}
    />
  </div>
);

export default ProductRoutes;
