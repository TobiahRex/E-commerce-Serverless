import React, { PropTypes } from 'react';
import { LineChart } from 'react-svg-chart';

import Breadcrumb from '../../../../Components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminProducts({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="products--main">
      <div className="products--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Manage Login"
        />
        <AdminWelcomeMsg />
        <div className="products__body">
          <AdminSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">

              <div className="products__title">
                <h1>Products</h1>
              </div>

              <div className="products__body">
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
                <div className="body__main">
                  <div className="main__top-products">
                    <div className="top-products__header">
                      <div className="header__title admin-dash__small-title">
                        <h3>Top 10 Products</h3>
                      </div>
                      <div className="header__legend">
                        <ul className="legend--list">
                          <li className="list--members">
                            <div className="members__color-box"></div>
                            <p>Members</p>
                          </li>
                          <li className="list--visitors">
                            <div className="visitors__color-box"></div>
                            <p>Visitors</p>
                          </li>
                          <li className="list--unknown">
                            <div className="unkown__color-box"></div>
                            <p>Unkown</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="top-products__body">
                      <div className="body__left">
                        <ul className="left__product--list">
                          <li className="list--product">
                            <p>Fruity Bamm Bamm</p>
                            <br />
                            <p>123,000</p>
                          </li>
                          <li className="list--product">
                            <p>Strawberries {'N\''} Cream</p>
                            <br />
                            <p>123,000</p>
                          </li>
                          <li className="list--product">
                            <p>French vanilla Mocha</p>
                            <br />
                            <p>123,000</p>
                          </li>
                          <li className="list--product">
                            <p>Keylime Pie</p>
                            <br />
                            <p>123,000</p>
                          </li>

                        </ul>
                      </div>
                      <div className="body__right">

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
AdminProducts.propTypes = propTypes;
export default AdminProducts;
