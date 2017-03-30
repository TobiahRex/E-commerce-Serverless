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
                  <div className="header--bars">
                    <div className="bars__visitors--web">
                      <div className="visitors__progress">
                        <p>1,234</p>
                      </div>
                      <p>Web</p>
                    </div>
                    <div className="bars__visitors--mobile">
                      <div className="visitors__progress">
                        <p>1,234</p>
                      </div>
                      <p>Mobile</p>
                    </div>
                    <div className="bars__visitors--unkown">
                      <div className="visitors__progress">
                        <p>1,234</p>
                      </div>
                      <p>Unkown</p>
                    </div>
                  </div>
                </div>

                <div className="body__main">
                  <div className="main__register-stats">
                    <div className="register-stats__header">
                      <div className="header-title admin-dash__small-title">
                        <h3>Register Stats</h3>
                      </div>
                      <div className="register-stats__total">
                        <p>Total</p>
                        <p>234</p>
                      </div>
                    </div>

                    <div className="register-stats__left">
                      <div className="left__country-list">
                        <ul className="country-list--container">
                          <li className="list--country">
                            <p>United States</p>
                            <p>123,000</p>
                          </li>
                          <li className="list--country">
                            <p>Japan</p>
                            <p>123,000</p>
                          </li>
                          <li className="list--country">
                            <p>Canada</p>
                            <p>123,000</p>
                          </li>
                          <li className="list--country">
                            <p>Australia</p>
                            <p>123,000</p>
                          </li>
                          <li className="list--country">
                            <p>Singapore</p>
                            <p>123,000</p>
                          </li>
                        </ul>
                      </div>
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
AdminMembers.propTypes = propTypes;
export default AdminMembers;
