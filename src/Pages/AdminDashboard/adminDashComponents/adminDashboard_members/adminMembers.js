import React, { PropTypes } from 'react';
import 'react-router';
import FontAwesome from 'react-fontawesome';
import Breadcrumb from '../../../../Components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminMembers({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="members--main">
      <div className="members--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Manage Login"
        />
        <AdminWelcomeMsg />
        <div className="members__body">
          <AdminSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">

              <div className="members__title">
                <h1>Members</h1>
              </div>

              <div className="members__body">
                
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AdminMembers.propTypes = propTypes;
export default AdminMembers;
