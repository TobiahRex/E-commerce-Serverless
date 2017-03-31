import React, { PropTypes } from 'react';
import 'react-router';
import FontAwesome from 'react-fontawesome';
import uuid from 'uuid';

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
          <div className="body__sidebars">
            <AdminSideBar location={location} />
            <AdminSideBar.Sales location={location} />
            <AdminSideBar.Members location={location} />
          </div>
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

                    <div className="register-stats__body">
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
                      <div className="register-stats__right">
                        <img src="../Images/world_heatmap.png" alt="World Heat Map" />
                      </div>
                    </div>
                  </div>

                  <div className="main__register-growth">
                    <div className="register-growth__title admin-dash__small-title">
                      <h3>Register Growth</h3>
                    </div>
                    <div className="register-growth--list">
                      <ul className="list--container">
                        <li className="list--ytd">
                          <p>YTD</p>
                          <br />
                          <p>- {0.05 * 100}%</p>
                        </li>
                        <li className="list--mtd">
                          <p>MTD</p>
                          <br />
                          <p>+ {0.12 * 100}%</p>
                        </li>
                        <li className="list--wtd">
                          <p>WTD</p>
                          <br />
                          <p>+ {0.03 * 100}%</p>
                        </li>
                        <li className="list--yesterday">
                          <p>Yesterday</p>
                          <br />
                          <p>+ {0.18 * 100}%</p>
                        </li>

                      </ul>
                    </div>
                  </div>

                  <div className="main__member-list">
                    <div className="member-list--header">
                      <div className="header__title admin-dash__small-title">
                        <h3>Member List</h3>
                      </div>
                      <div className="header__msg">
                        <p>* Double Click Row to Modify Permissions</p>
                      </div>
                    </div>
                    <div className="member-list__table">
                      <table className="table--container">
                        <thead className="table__header">
                          <tr className="header__row">
                            <th className="header--name">
                              <p>Name</p>
                            </th>
                            <th>
                              <p>Info</p>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="table__body">
                          <tr className="body__row">
                            <td className="body--name">
                              <div className="name--container">
                                <div className="name__header">
                                  <h3>1.</h3>
                                </div>
                                <div className="name__title">
                                  <h4>Snow, John</h4>
                                </div>
                                <div className="name__image">
                                  <img src="../Images/mock_profile-pic.png" alt="Profile Pic" style={{ borderRadius: '50%' }} />
                                </div>
                                <div className="name__id">
                                  User ID: {uuid()}
                                </div>
                              </div>
                            </td>
                            <td className="body--info">
                              <div className="info__stats-row1">
                                <ul className="stats-row1--list">
                                  <li className="list--stat">
                                    <div className="stat--nic-user">
                                      <h3>Nicotine User</h3>
                                      <p>TRUE</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--loyalty">
                                      <h3>Loyalty</h3>
                                      <p>010630</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--purchases">
                                      <h3>Purchases</h3>
                                      <p>34</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--reward-points">
                                      <h3>Reward Points</h3>
                                      <p>43</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="info__stats-row2">
                                <ul className="stats-row2--list">
                                  <li className="list--stat">
                                    <div className="stat--product-ratings">
                                      <h3>Product Ratings</h3>
                                      <p>
                                        <a href="/" onClick={() => console.info('open modal list')}>3</a>
                                      </p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--reviews">
                                      <h3>Reviews</h3>
                                      <p><a href="/" onClick={() => console.info('open modal list')}>3</a></p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--referalls">
                                      <h3>Purchases</h3>
                                      <p><a href="/" onClick={() => console.info('open modal list')}>2</a></p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--register-method">
                                      <h3>Register Method</h3>
                                      <p>facebook</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="info__stats-row3">
                                <ul className="stats-row3--list">
                                  <li className="list--stat">
                                    <div className="stat--user-story">
                                      <h3>User Story</h3>
                                      <p>asdf...</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--location">
                                      <h3>Location</h3>
                                      <p>Los Angeles, CA</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--email">
                                      <h3>Email</h3>
                                      <p>john.doe@gmail.com</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="info__stats-row4">
                                <ul className="stats-row4--list">
                                  <li className="list--stat">
                                    <div className="stat--permissions">
                                      <h3>Permissions</h3>
                                      <p>Member</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--age">
                                      <h3>Age</h3>
                                      <p>25</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--na">
                                      <h3>N/A</h3>
                                      <p>{' '}</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--na">
                                      <h3>N/A</h3>
                                      <p>{' '}</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr className="body__row">
                            <td className="body--name">
                              <div className="name--container">
                                <div className="name__header">
                                  <h3>1.</h3>
                                </div>
                                <div className="name__title">
                                  <h4>Snow, John</h4>
                                </div>
                                <div className="name__image">
                                  <img src="../Images/mock_profile-pic.png" alt="Profile Pic" style={{ borderRadius: '50%' }} />
                                </div>
                                <div className="name__id">
                                  User ID: {uuid()}
                                </div>
                              </div>
                            </td>
                            <td className="body--info">
                              <div className="info__stats-row1">
                                <ul className="stats-row1--list">
                                  <li className="list--stat">
                                    <div className="stat--nic-user">
                                      <h3>Nicotine User</h3>
                                      <p>TRUE</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--loyalty">
                                      <h3>Loyalty</h3>
                                      <p>010630</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--purchases">
                                      <h3>Purchases</h3>
                                      <p>34</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--reward-points">
                                      <h3>Reward Points</h3>
                                      <p>43</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="info__stats-row2">
                                <ul className="stats-row2--list">
                                  <li className="list--stat">
                                    <div className="stat--product-ratings">
                                      <h3>Product Ratings</h3>
                                      <p>
                                        <a href="/" onClick={() => console.info('open modal list')}>3</a>
                                      </p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--reviews">
                                      <h3>Reviews</h3>
                                      <p><a href="/" onClick={() => console.info('open modal list')}>3</a></p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--referalls">
                                      <h3>Purchases</h3>
                                      <p><a href="/" onClick={() => console.info('open modal list')}>2</a></p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--register-method">
                                      <h3>Register Method</h3>
                                      <p>facebook</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="info__stats-row3">
                                <ul className="stats-row3--list">
                                  <li className="list--stat">
                                    <div className="stat--user-story">
                                      <h3>User Story</h3>
                                      <p>asdf...</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--location">
                                      <h3>Location</h3>
                                      <p>Los Angeles, CA</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--email">
                                      <h3>Email</h3>
                                      <p>john.doe@gmail.com</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="info__stats-row4">
                                <ul className="stats-row4--list">
                                  <li className="list--stat">
                                    <div className="stat--permissions">
                                      <h3>Permissions</h3>
                                      <p>Member</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--age">
                                      <h3>Age</h3>
                                      <p>25</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--na">
                                      <h3>N/A</h3>
                                      <p>{' '}</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--na">
                                      <h3>N/A</h3>
                                      <p>{' '}</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                          <tr className="body__row">
                            <td className="body--name">
                              <div className="name--container">
                                <div className="name__header">
                                  <h3>1.</h3>
                                </div>
                                <div className="name__title">
                                  <h4>Snow, John</h4>
                                </div>
                                <div className="name__image">
                                  <img src="../Images/mock_profile-pic.png" alt="Profile Pic" style={{ borderRadius: '50%' }} />
                                </div>
                                <div className="name__id">
                                  User ID: {uuid()}
                                </div>
                              </div>
                            </td>
                            <td className="body--info">
                              <div className="info__stats-row1">
                                <ul className="stats-row1--list">
                                  <li className="list--stat">
                                    <div className="stat--nic-user">
                                      <h3>Nicotine User</h3>
                                      <p>TRUE</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--loyalty">
                                      <h3>Loyalty</h3>
                                      <p>010630</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--purchases">
                                      <h3>Purchases</h3>
                                      <p>34</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--reward-points">
                                      <h3>Reward Points</h3>
                                      <p>43</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="info__stats-row2">
                                <ul className="stats-row2--list">
                                  <li className="list--stat">
                                    <div className="stat--product-ratings">
                                      <h3>Product Ratings</h3>
                                      <p>
                                        <a href="/" onClick={() => console.info('open modal list')}>3</a>
                                      </p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--reviews">
                                      <h3>Reviews</h3>
                                      <p><a href="/" onClick={() => console.info('open modal list')}>3</a></p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--referalls">
                                      <h3>Purchases</h3>
                                      <p><a href="/" onClick={() => console.info('open modal list')}>2</a></p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--register-method">
                                      <h3>Register Method</h3>
                                      <p>facebook</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="info__stats-row3">
                                <ul className="stats-row3--list">
                                  <li className="list--stat">
                                    <div className="stat--user-story">
                                      <h3>User Story</h3>
                                      <p>asdf...</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--location">
                                      <h3>Location</h3>
                                      <p>Los Angeles, CA</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--email">
                                      <h3>Email</h3>
                                      <p>john.doe@gmail.com</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                              <div className="info__stats-row4">
                                <ul className="stats-row4--list">
                                  <li className="list--stat">
                                    <div className="stat--permissions">
                                      <h3>Permissions</h3>
                                      <p>Member</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--age">
                                      <h3>Age</h3>
                                      <p>25</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--na">
                                      <h3>N/A</h3>
                                      <p>{' '}</p>
                                    </div>
                                  </li>
                                  <li className="list--stat">
                                    <div className="stat--na">
                                      <h3>N/A</h3>
                                      <p>{' '}</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="main__member-permissions">
                    <div className="member-list--header">
                      <div className="header__title admin-dash__small-title">
                        <h3>Permissions</h3>
                        <div className="header__filter">
                          <div className="filter--container">
                            <label htmlFor="filter--options">Filter By</label>
                            <div className="options__ddn--container" id="filter--options">
                              <div className="ddn__readout">
                                <input type="text" className="readout--display" value="Admins" disabled />
                                <button className="readout--btn sweep-right">
                                  <FontAwesome name="angle-down" />
                                </button>
                              </div>
                              <div className="ddn__content" style={{ display: 'none' }}>
                                <ul className="content--list">
                                  <li className="list--option sweep-right">
                                    <p>Super Admins</p>
                                  </li>
                                  <li className="list--option sweep-right">
                                    <p>Admins</p>
                                  </li>
                                  <li className="list--option sweep-right">
                                    <p>Staff</p>
                                  </li>
                                  <li className="list--option sweep-right">
                                    <p>Member</p>
                                  </li>
                                  <li className="list--option sweep-right">
                                    <p>Whole Seller</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="member-list__table">
                        <table className="table--container">
                          <thead className="table__header">
                            <tr className="header__row">
                              <th className="header--name">
                                <p>Name</p>
                              </th>
                              <th>
                                <p>Access</p>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="table__body">
                            <tr className="body__row">
                              <td className="body--name">
                                <div className="name--container">
                                  <div className="name__header">
                                    <h3>1.</h3>
                                  </div>
                                  <div className="name__title">
                                    <h4>Snow, John</h4>
                                  </div>
                                  <div className="name__image">
                                    <img src="../Images/mock_profile-pic.png" alt="Profile Pic" style={{ borderRadius: '50%' }} />
                                  </div>
                                  <div className="name__id">
                                    User ID: {uuid()}
                                  </div>
                                </div>
                              </td>
                              <td className="body--access">
                                <div className="info__permissions--container">
                                  <label htmlFor="permissions--options">
                                    Filter By
                                  </label>
                                  <div className="options__ddn--container" id="permissions--options">
                                    <div className="ddn__readout">
                                      <input type="text" className="readout--display" value="Admins" disabled />
                                      <button className="readout--btn sweep-right">
                                        <FontAwesome name="angle-down" />
                                      </button>
                                    </div>
                                    <div className="ddn__content" style={{ display: 'none' }}>
                                      <ul className="content--list">
                                        <li className="list--option sweep-right">
                                          <p>Super Admins</p>
                                        </li>
                                        <li className="list--option sweep-right">
                                          <p>Admins</p>
                                        </li>
                                        <li className="list--option sweep-right">
                                          <p>Staff</p>
                                        </li>
                                        <li className="list--option sweep-right">
                                          <p>Member</p>
                                        </li>
                                        <li className="list--option sweep-right">
                                          <p>Whole Seller</p>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>

                        </table>
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
