import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import BreadCrumb from '../../../../Components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminHomeDash({ location }) {
  return (
    <div className="admin-dash--main">
      <div className="admin-dash--container">
        <BreadCrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', location.pathname]}
          lastCrumb="Home Dashboard"
        />

        <AdminWelcomeMsg />
        <div className="admin-dash__body">
          <AdminSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="dashboard--title">
                <h1>Admin Dashboard</h1>
              </div>
              <div className="dashboard__header">
                <div className="dashboard__stats--container">
                  <ul className="stats--list">
                    <li className="list--stat">
                      <div className="stat--visits">
                        <h3>230</h3>
                        <p>Visits Today</p>
                      </div>
                    </li>
                    <li className="list--stat">
                      <div className="stat--sales">
                        <h3>24</h3>
                        <p>Sales Today</p>
                      </div>
                    </li>
                    <li className="list--stat">
                      <div className="stat--new-members">
                        <h3>10</h3>
                        <p>New Members</p>
                        <p>Today</p>
                      </div>
                    </li>
                    <li className="list--stat">
                      <div className="stat--revenue">
                        <h3>
                          <FontAwesome name="usd" />{'\u00A0'}1,200</h3>
                        <p>Revenue Today</p>
                      </div>
                    </li>
                    <li className="list--stat">
                      <div className="stat--bounce-rate">
                        <h3>1</h3>
                        <p>Bounce Rate</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="dashboard__top-half--container">
                  <div className="top-half--contact-info">
                    <div className="contact-info__title admin-dash__small-title">
                      <h3>Contact Info</h3>
                    </div>
                    <div className="contact-info__info">
                      {/* TODO:  Render this information dynamically */}
                      <p className="info--name">Bruce Wayne</p>
                      <p className="info--email">bruce.wayne@wayneenterprises.com</p>
                      <p className="info--phone">(123)-123-1234</p>
                    </div>
                    <div className="contact-info__edit-btn">
                      <button className="small-edit-btn sweep-right">Edit</button>
                    </div>
                  </div>
                  <div className="top-half--password">
                    <div className="password__input">
                      <label htmlFor="login-method--password">Password</label>
                      <input type="password" id="login-method--password" value="password1234" disabled />
                    </div>
                    <div className="password__edit-btn">
                      <button className="medium-size-btn sweep-right">Change Password</button>
                    </div>
                  </div>
                </div>
                <div className="dashboard__bottom-half--container">
                  <div className="bottom-half--login-methods">
                    <div className="login-methods__title admin-dash__small-title">
                      <h3>Login Methods</h3>
                    </div>
                    <div className="login-methods--social">
                      <ul className="login-methods--social-list">
                        <li className="social-list--item active facebook">
                          <FontAwesome name="facebook" />
                        </li>
                        <li className="social-list--item active instagram">
                          <FontAwesome name="instagram" />
                        </li>
                        <li className="social-list--item">
                          <FontAwesome name="google" />
                        </li>
                        <li className="social-list--item">
                          <FontAwesome name="twitter" />
                        </li>
                      </ul>
                      <div className="social-login__edit-btn">
                        <button className="small-edit-btn sweep-right">Edit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard__reports">
                <div className="reports__title admin-dash__small-title">
                  <h3>Reports</h3>
                </div>
                <div className="reports__body">
                  <div className="body__header">
                    <ul className="header--list">
                      <li className="list--option">
                        <div className="option--type">
                          <div className="type__ddn--container">
                            <div className="type__ddn--readout">
                              <input type="text" className="readout--msg" disabled value="Sales" />
                              <button className="readout--btn sweep-right">
                                <span className="flex-btn-parent">
                                  <FontAwesome name="angle-down" />
                                </span>
                              </button>
                            </div>
                            <div className="type__ddn--content">
                              <ul className="ddn--content__list">
                                {/* NOTE: These need to be rendered dynamically, and the option selected, should absent from the available choices. */}
                                <li className="list--option sweep-right">
                                  <p>Products</p>
                                </li>
                                <li className="list--option sweep-right">
                                  <p>Members</p>
                                </li>
                                <li className="list--option sweep-right">
                                  <p>Traffic</p>
                                </li>
                                <li className="list--option sweep-right">
                                  <p>Sales</p>
                                </li>
                              </ul>
                            </div>
                          </div>


                        </div>
                      </li>
                      <li className="list--option">
                        <div className="option--periodicty">
                          <div className="periodicty__ddn--container">
                            <div className="periodicty__ddn--readout">
                              <input type="text" className="readout--msg" disabled value="Today (24hrs)" />
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
                                  <p>Today (24hrs)</p>
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
                      </li>
                      <li className="list--option">
                        <div className="option--file-output">
                          <FontAwesome name="file-o" />
                          {'\u00A0'}
                          <span className="file-output__file-name">
                            20161225_Today_SalesReport.pdf
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="body__status-msg">
                    <div className="status-msg__pre-generated ">
                      <FontAwesome name="info-circle" />{'\u00A0'}
                      <p>{'You\'ve'} selected a {'<Periodicity>'}, {'<TYPE>'} report.</p>
                    </div>
                    <div className="status-msg__generated ">
                      <FontAwesome name="exclamation-circle" />{'\u00A0'}
                      <p>Success!</p>
                    </div>
                  </div>
                  <div className="body__action-section ">
                    <div className="action-section__generate">
                      <button className="medium-size-btn sweep-right">
                        Generate
                      </button>
                    </div>
                    <div className="action-section__text">
                      <button className="medium-size-btn sweep-right">
                        Text Report
                      </button>
                    </div>
                    <div className="action-section__email">
                      <button className="medium-size-btn sweep-right">
                        Email
                      </button>
                    </div>
                    <div className="action-section__download">
                      <button className="medium-size-btn sweep-right">
                        Download
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
AdminHomeDash.propTypes = propTypes;
export default AdminHomeDash;
