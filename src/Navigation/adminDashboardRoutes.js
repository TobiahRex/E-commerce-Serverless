import React from 'react';
import { Route } from 'react-router';
import AdminDashboard from '../Pages/AdminDashboard/adminDashboard';

const AdminDashboardRoutes = () => (
  <Route path="/admin_:id" component={AdminDashboard} />
);

export default AdminDashboardRoutes;
