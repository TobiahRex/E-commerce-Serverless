import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Breadcrumb from '../../../../components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

const { objectOf, any } = PropTypes;
const propTypes = { location: objectOf(any).isRequired };

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
                </div>
                <div className="body__choose-file">
                  <p>Choose a file below</p>
                  <button type="button" className="medium-size-btn sweep-right">
                    Choose File
                  </button>
                  <input type="file" className="file-upload" size="60" />
                </div>
                <div className="body__paste-html">
                  <p>Paste HTML here</p>
                  <textarea cols="30" rows="10" value="" defaultValue="Paste here..." />
                  <button type="button" className="medium-size-btn sweep-right">
                    <span className="flex-btn-parent">
                      <FontAwesome name="cloud-upload" />
                      Upload HTML
                    </span>
                  </button>
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
