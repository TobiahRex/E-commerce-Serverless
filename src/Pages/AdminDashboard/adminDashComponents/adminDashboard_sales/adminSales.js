import React, { PropTypes } from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminSales({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="sales--main">
      <div className="sales--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Manage Login"
        />
        <AdminWelcomeMsg />
        <div className="sales__body">
          <AdminSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">

              <div className="sales__title">
                <h1>Sales</h1>
              </div>

              <div className="sales__body">

              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AdminSales.propTypes = propTypes;
export default AdminSales;
