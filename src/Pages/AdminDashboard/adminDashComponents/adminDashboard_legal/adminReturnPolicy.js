import React from 'react';
import FontAwesome from 'react-fontawesome';

import Breadcrumb from '../../../../Components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

export default function AdminReturnPolicy() {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="return-policy--main">
      <div className="return-policy--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Return Policy"
        />
        <AdminWelcomeMsg />
        <div className="return-policy__body">
          <div className="body__sidebars">
            <AdminSideBar location={location} />
            <AdminSideBar.Sales location={location} />
            <AdminSideBar.Members location={location} />
          </div>
          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="legal__title">
                <h1>Return Policy</h1>
              </div>

              <div className="legal__body">
                <p>
                  RETURNS AND EXCHANGES
                  <br /><br />
                  100% Money back guarantee for defective items. Defective items or missing parts must be reported within 15 days of purchase or delivery. Shipping damage(s) must be reported immediately upon receipt of package(s). Returns and exchanges for any other reason will not be accepted.
                  <br /><br />
                  CANCELLATIONS
                  Cancellations on orders are not-accepted.
                  <br /><br />
                  SALES TAX
                  We collect sales tax in the state of California. All shipments to Japan are subject to California Sales Tax.
                  <br /><br />
                  CUSTOMER SERVICE
                  Our helpful customer service department is committed to assist you in every way. If you have a question or problem with your order, please call 1-xxx-xxx-xxxx for Customer Service, Monday–Friday, 8am – 5pm PST. Or email us at support@vapeswitch.com 24 hours a day, 7 days a week. Special requests or adjustments need to be arranged with our Customer Service department before your order has shipped.
                </p>
                <div className="action-section__back-btn">
                  <button className="back-btn primary-flex-button sweep-right">
                    <span className="flex-parent-btn">
                      <FontAwesome name="angle-double-left" />
                      {'\u00A0'}
                      Back
                    </span>
                  </button>
                  <button className="save-btn primary-flex-button sweep-right">
                    Edit
                  </button>
                </div>
              </div>
              <div className="legal__body--edit">
                <textarea
                  cols="30"
                  rows="10"
                  value="RETURNS AND EXCHANGES
                  <br /><br />
                  100% Money back guarantee for defective items. Defective items or missing parts must be reported within 15 days of purchase or delivery. Shipping damage(s) must be reported immediately upon receipt of package(s). Returns and exchanges for any other reason will not be accepted.
                  <br /><br />
                  CANCELLATIONS
                  Cancellations on orders are not-accepted.
                  <br /><br />
                  SALES TAX
                  We collect sales tax in the state of California. All shipments to Japan are subject to California Sales Tax.
                  <br /><br />
                  CUSTOMER SERVICE
                  Our helpful customer service department is committed to assist you in every way. If you have a question or problem with your order, please call 1-xxx-xxx-xxxx for Customer Service, Monday–Friday, 8am – 5pm PST. Or email us at support@vapeswitch.com 24 hours a day, 7 days a week. Special requests or adjustments need to be arranged with our Customer Service department before your order has shipped."
                />
                <div className="action-section__save-btn">
                  <div className="action-section__save-btn">
                    <button className="save-btn primary-flex-button sweep-right">
                      Save
                    </button>
                  </div>
                  <div>
                    <button className="save-btn primary-flex-button-saving sweep-right">
                      <FontAwesome name="refresh" spin />
                      {'\u00A0'} Saving...
                    </button>
                  </div>
                  <div>
                    <button className="save-btn primary-flex-button-saved sweep-right">
                      <span className="flex-parent-btn">
                        <FontAwesome name="check-circle" />
                        {'\u00A0'} Saved!
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
  );
}
