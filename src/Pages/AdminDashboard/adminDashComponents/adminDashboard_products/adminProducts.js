import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
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
                        <LineChart
                          lines={[
                            { points: [
                              { label: 'travel', value: 11 },
                              { label: 'accommodation', value: 27 },
                              { label: 'food', value: 4 },
                              { label: 'drink', value: 19 },
                              { label: 'tourism', value: 10 },
                              ],
                            },
                          ]}
                          height={400}
                          width={600}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="main__product-table">
                    <div className="product-table__header">
                      <div className="header__title admin-dash__small-title">
                        <h3>Product Table</h3>
                      </div>
                      <div className="header__add-new-btn">
                        <button className="medium-size-btn">
                          Add New Product(s)
                        </button>
                      </div>
                      <div className="header__msg">
                        <p>* Double click row to modify information</p>
                      </div>
                    </div>

                    <div className="product-table__body ">
                      <div className="body__table">
                        <table className="table--container">
                          <thead className="table__header">
                            <tr className="header--row">
                              <th className="header--images">
                                <p>Image(s)</p>
                              </th>
                              <th className="header--desc">
                                <p>Description</p>
                              </th>
                              <th className="header--nicotine">
                                <p>Nicotine</p>
                              </th>
                              <th className="header--prices">
                                <p>Prices</p>
                              </th>
                              <th className="header--qty">
                                <p>
                                  Qty
                                </p>
                              </th>
                              <th className="header--qty">
                                <p>Colors</p>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="table__body">
                            <tr className="body__row">
                              <td className="row--image">
                                <img src="../Images/nj2jp_juice_card_fvm.png" alt="Juice" />
                              </td>
                              <td className="row--desc">
                                <label htmlFor="title">Title</label>
                                <p id="title">French Vanilla Mocha</p>
                              </td>
                              <td className="row--nicotine"></td>
                              <td className="row--prices"></td>
                              <td className="row--qty"></td>
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
AdminProducts.propTypes = propTypes;
export default AdminProducts;
