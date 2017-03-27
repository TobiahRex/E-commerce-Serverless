import React, { PropTypes } from 'react';
import 'react-router';
import FontAwesome from 'react-fontawesome';
import Breadcrumb from '../../../../Components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminPromotionsSales({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="promotions-sales--main">
      <div className="promotions-sales--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Manage Login"
        />
        <AdminWelcomeMsg />
        <div className="promotions-sales__body">
          <AdminSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">

              <div className="promotions-sales__title">
                <h1>Promotions & Sales</h1>
              </div>

              <div className="promotions-sales__body">

              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AdminPromotionsSales.propTypes = propTypes;
export default AdminPromotionsSales;
