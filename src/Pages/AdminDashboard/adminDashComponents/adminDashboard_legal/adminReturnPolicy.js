import React from 'react';
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
          <AdminSideBar location={location} />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
