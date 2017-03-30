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
          <div className="body__sidebars">
            <AdminSideBar location={location} />
            <AdminSideBar.Sales location={location} />
            <AdminSideBar.Members location={location} />
          </div>
          <div className="body__dashboard">
            <div className="dashboard--container">

              <div className="promotions-sales__title">
                <h1>Promotions & Sales</h1>
              </div>

              <div className="promotions-sales__body">
                <div className="body__staging-area">
                  <p>Drag & Drop your files here</p>
                  <br />
                  <p>Or choose a file below</p>
                </div>
                <div className="body__choose-file">
                  <button type="button">
                    Choose File
                  </button>
                  <input type="file" className="file-upload" size="60" />
                </div>
                <div className="body__action-section-top">
                  <button className="primary-button cancel">Cancel</button>
                  <button className="primary-flex-button send-to-users">
                    <span className="flex-btn-parent">
                      <FontAwesome name="search" />
                      <span>Preview</span>
                    </span>
                  </button>
                  <button className="primary-flex-button send-to-users">
                    <span className="flex-btn-parent">
                      <FontAwesome name="paper-plane-o" />
                      <span>Send To Users</span>
                    </span>
                  </button>
                </div>
                <div className="body__action-section-bottom">
                  <div className="login-app__action-section--container">
                    <div className="action-section__back-btn">
                      <button className="back-btn primary-flex-button sweep-right">
                        <span className="flex-parent-btn">
                          <FontAwesome name="angle-double-left" />
                          {'\u00A0'}
                          Back
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
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
