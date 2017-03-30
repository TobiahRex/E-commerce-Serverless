import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import PieChart from 'react-svg-piechart';
import Breadcrumb from '../../../../Components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminTraffic({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="traffic--main">
      <div className="traffic--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Manage Login"
        />
        <AdminWelcomeMsg />
        <div className="traffic__body">
          <AdminSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">

              <div className="traffic__title">
                <h1>Traffic</h1>
              </div>

              <div className="traffic__body">
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
                  <div className="main__countries">
                    <div className="countries__header">
                      <div className="header__title admin-dash__small-title">
                        <h3>Countries By Rank</h3>
                      </div>
                    </div>
                    <div className="countries__left">
                      <ul className="left__countries--list">
                        <li className="list--country">
                          <p>Japan - 123,000</p>
                        </li>
                        <li className="list--country">
                          <p>USA - 111,000</p>
                        </li>
                        <li className="list--country">
                          <p>PHILIP - 20,000</p>
                        </li>
                        <li className="list--country">
                          <p>AUSTR. - 13,000</p>
                        </li>
                      </ul>
                    </div>
                    <div className="countries__right">
                      <PieChart
                        className="right_pie-chart"
                        data={[
                          { label: 'Facebook', value: 100, color: '#3b5998' },
                          { label: 'Twitter', value: 60, color: '#00aced' },
                          { label: 'Google Plus', value: 30, color: '#dd4b39' },
                          { label: 'Pinterest', value: 20, color: '#cb2027' },
                          { label: 'Linked In', value: 10, color: '#007bb6' },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="main__platform-stats">
                    <div className="platform-stats__title admin-dash__small-title">
                      <h3>Platform Stats</h3>
                    </div>
                    <div className="platform-stats__bars ">

                      <div className="bars--web">
                        <div className="web__bar">
                          <p>40,000</p>
                        </div>
                        <div className="web__title">
                          <p>12%</p>
                          <p>Web</p>
                        </div>
                      </div>

                      <div className="bars--mobile">
                        <div className="mobile__bar">
                          <p>40,000</p>
                        </div>
                        <div className="mobile__title">
                          <p>12%</p>
                          <p>Mobile</p>
                        </div>
                      </div>

                      <div className="bars--na">
                        <div className="na__bar">
                          <p>40,000</p>
                        </div>
                        <div className="na__title">
                          <p>12%</p>
                          <p>Unkown</p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="main__vgrowth">
                    <div className="vgrowth__title admin-dash__small-title">
                      <h3>View Growth</h3>
                    </div>

                    <div className="vgrowth__total">
                      <ul className="total--list">
                        <li className="list--stat">
                          <div className="stat--ytd">
                            <h3>YTD</h3>
                            <p>- {0.05 * 100}%</p>
                          </div>
                        </li>
                        <li className="list--stat">
                          <div className="stat--mtd">
                            <h3>MTD</h3>
                            <p>- {0.05 * 100}%</p>
                          </div>
                        </li>
                        <li className="list--stat">
                          <div className="stat--wtd">
                            <h3>WTD</h3>
                            <p>- {0.05 * 100}%</p>
                          </div>
                        </li>
                        <li className="list--stat">
                          <div className="stat--yesterday">
                            <h3>Yesterday</h3>
                            <p>- {0.05 * 100}%</p>
                          </div>
                        </li>

                      </ul>
                    </div>

                    <div className="vgrowth__visitors">
                      <ul className="total--list">
                        <li className="list--stat">
                          <div className="stat--ytd">
                            <h3>YTD</h3>
                            <p>- {0.05 * 100}%</p>
                          </div>
                        </li>
                        <li className="list--stat">
                          <div className="stat--mtd">
                            <h3>MTD</h3>
                            <p>- {0.05 * 100}%</p>
                          </div>
                        </li>
                        <li className="list--stat">
                          <div className="stat--wtd">
                            <h3>WTD</h3>
                            <p>- {0.05 * 100}%</p>
                          </div>
                        </li>
                        <li className="list--stat">
                          <div className="stat--yesterday">
                            <h3>Yesterday</h3>
                            <p>- {0.05 * 100}%</p>
                          </div>
                        </li>

                      </ul>
                    </div>

                    <div className="vgrowth__members">
                      <ul className="total--list">
                        <li className="list--stat">
                          <div className="stat--ytd">
                            <h3>YTD</h3>
                            <p>- {0.05 * 100}%</p>
                          </div>
                        </li>
                        <li className="list--stat">
                          <div className="stat--mtd">
                            <h3>MTD</h3>
                            <p>- {0.05 * 100}%</p>
                          </div>
                        </li>
                        <li className="list--stat">
                          <div className="stat--wtd">
                            <h3>WTD</h3>
                            <p>- {0.05 * 100}%</p>
                          </div>
                        </li>
                        <li className="list--stat">
                          <div className="stat--yesterday">
                            <h3>Yesterday</h3>
                            <p>- {0.05 * 100}%</p>
                          </div>
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
  );
}
AdminTraffic.propTypes = propTypes;
export default AdminTraffic;
