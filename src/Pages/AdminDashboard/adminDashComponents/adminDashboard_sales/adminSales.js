import React, { PropTypes } from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';
import FontAwesome from 'react-fontawesome';

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
          <div className="body__sidebars">
            <AdminSideBar location={location} />
            <AdminSideBar.Sales location={location} />
            <AdminSideBar.Members location={location} />
          </div>
          <div className="body__dashboard">
            <div className="dashboard--container">

              <div className="sales__title">
                <h1>Sales</h1>
              </div>

              <div className="sales__body">
                <div className="body__header">
                  <div className="header--periodicity">
                    <div className="periodicity__ddn--readout">
                      <input type="text" className="readout--msg" disabled value="Today" />
                      <button className="readout--btn sweep-right">
                        <span className="flex-btn-parent">
                          <FontAwesome name="angle-down" />
                        </span>
                      </button>
                    </div>
                    <div className="periodicity__ddn--content">
                      <ul className="ddn--content__list">
                        {/* NOTE: These need to be rendered dynamically, and the option selected, should absent from the available choices. */}
                        <li className="list--option sweep-right">
                          <p>Today</p>
                        </li>
                        <li className="list--option sweep-right">
                          <p>Week</p>
                        </li>
                        <li className="list--option sweep-right">
                          <p>Month</p>
                        </li>
                        <li className="list--option sweep-right">
                          <p>Quarter</p>
                        </li>
                        <li className="list--option sweep-right">
                          <p>Semi-Annual</p>
                        </li>
                        <li className="list--option sweep-right">
                          <p>Annual</p>
                        </li>
                        <li className="list--option sweep-right">
                          <p>Lifetime</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="body__total-sales-row">
                  <ul className="total-sales-row--list">
                    <li className="list--summary ">
                      <div className="summary--container">
                        <h3>Total Sales</h3>
                        <p>
                          $ {'9,800'}.00
                        </p>
                      </div>
                    </li>
                    <li className="list--web">

                    </li>
                    <li className="list--mobile">

                    </li>
                    <li className="list--other">

                    </li>
                  </ul>
                </div>
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
