import React from 'react';
import FontAwesome from 'react-fontawesome';

import Breadcrumb from '../../../../components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

export default function AdminShippingPolicy() {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="shipping-policy--main">
      <div className="shipping-policy--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Shipping Policy"
        />
        <AdminWelcomeMsg />
        <div className="shipping-policy__body">
          <div className="body__sidebars">
            <AdminSideBar location={location} />
            <AdminSideBar.Sales location={location} />
            <AdminSideBar.Members location={location} />
          </div>
          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="legal__title">
                <h1>Shipping Policy</h1>
              </div>
              <div className="legal__body">
                <p>
                  PROCESSING AND SHIPPING
                  <br /><br />
                  Orders will be processed within 1-3 business days after your full payment has been received. Shipment time will be between 2-7 business days depending on your physical address. The total wait time after you place your order will be between 1-7 business days. Shipping time and cost vary depending on location, and product ordered.
                  <br /><br />
                  IN A HURRY?
                  <br /><br />
                  We offer priority handling and delivery on most items upon request. For special instructions, PLEASE ORDER BY PHONE.
                </p>
                <div className="legal__action-section--container">
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
              </div>
              <div className="legal__body--edit">
                <textarea
                  cols="30"
                  rows="100"
                  value="PROCESSING AND SHIPPING
                  <br /><br />
                  Orders will be processed within 1-3 business days after your full payment has been received. Shipment time will be between 2-7 business days depending on your physical address. The total wait time after you place your order will be between 1-7 business days. Shipping time and cost vary depending on location, and product ordered.
                  <br /><br />
                  IN A HURRY?
                  <br /><br />
                  We offer priority handling and delivery on most items upon request. For special instructions, PLEASE ORDER BY PHONE."
                />
                <div className="action-section__save-btn">
                  <div className="action-section__save-btn">
                    <button className="save-btn primary-flex-button sweep-right">
                      Cancel
                    </button>
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
