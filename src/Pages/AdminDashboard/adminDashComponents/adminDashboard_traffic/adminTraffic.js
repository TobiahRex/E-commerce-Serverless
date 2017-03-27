import React, { PropTypes } from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminTraffic({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="traffic--main">
      <div className="traffic--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Manage Login"
        />
        <AdminWelcomeMsg />
        <div className="traffic__body">
          <AdminSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">

              <div className="traffic__title">
                <h1>Traffic</h1>
              </div>

              <div className="traffic__body">

              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AdminTraffic.propTypes = propTypes;
export default AdminTraffic;
