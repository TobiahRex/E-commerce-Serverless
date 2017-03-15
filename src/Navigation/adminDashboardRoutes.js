import React from 'react';
import { Route } from 'react-router';
import AdminDashboard from '../Pages/AdminDashboard/adminDashboard';

const authRoutes = () => (
  <div>
    <Route path="/admin_:id" component={AdminDashboard} />
  </div>
);

export default authRoutes;
