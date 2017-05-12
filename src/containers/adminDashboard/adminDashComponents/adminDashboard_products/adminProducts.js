import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
// import { LineChart } from 'react-svg-chart';
import uuid from 'uuid';

import Breadcrumb from '../../../../components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';
import ProductsModal from './adminDashboard_products_modal_modify_web';

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
          <div className="body__sidebars">
            <AdminSideBar location={location} />
            <AdminSideBar.Sales location={location} />
            <AdminSideBar.Members location={location} />
          </div>
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
                        {/* <LineChart
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
                        /> */}
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
                            </tr>
                          </thead>
                          <tbody className="table__body">
                            <tr className="body__row">
                              <td className="row__image">
                                <img className="image--primary" src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp_juice_card_fvm.png" alt="Juice" />
                                <img className="image--secondary" src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp_juice_card_fvm.png" alt="Juice" />
                                <img className="image--secondary" src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp_juice_card_fvm.png" alt="Juice" />
                              </td>
                              <td className="row--desc">
                                <ul className="desc--list">
                                  <li className="list--desc">
                                    <label htmlFor="title">Title</label>
                                    <p id="title">French Vanilla Mocha</p>
                                  </li>
                                  <li className="list--desc">
                                    <label htmlFor="sub-title">Nicotine</label>
                                    <p id="sub-title">6mg</p>
                                  </li>
                                  <li className="list-sku">
                                    <label htmlFor="sku">SKU</label>
                                    <p id="sku">{uuid()}</p>
                                  </li>
                                </ul>
                              </td>
                              <td className="row--nicotine">
                                <div className="nicotine--option">
                                  <span>2mg</span>
                                </div>
                                <div className="nicotine--option">
                                  <span>4mg</span>
                                </div>
                                <div className="nicotine--option">
                                  <span>6mg</span>
                                </div>
                                <div className="nicotine--option">
                                  <span>8mg</span>
                                </div>
                              </td>
                              <td className="row--prices">
                                <div className="row__japanese">
                                  <p>{'\u00A5'} {'35'}.00</p>
                                </div>
                                <div className="row__usd">
                                  <p>$ {'30'}.00</p>
                                </div>
                              </td>
                              <td className="row--qty">
                                <p>35</p>
                              </td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="main__product-stats">
                    <div className="product-stats__header">
                      <div className="header__title admin-dash__small-title">
                        <h3>Product Stats</h3>
                      </div>
                    </div>

                    <div className="product-stats__body ">
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
                              <th className="header--page-views">
                                <p>Page Views</p>
                              </th>
                              <th className="header--clicks">
                                <p>Clicks</p>
                              </th>
                              <th className="header--added-to-cart">
                                <p>Cart Adds</p>
                              </th>
                              <th className="header--purchased">
                                <p>Purchased</p>
                              </th>
                              <th className="header--rating">
                                <p>Rating</p>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="table__body">
                            <tr className="body__row">
                              <td className="row__image">
                                <img className="image--primary" src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp_juice_card_fvm.png" alt="Juice" />
                                <img className="image--secondary" src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp_juice_card_fvm.png" alt="Juice" />
                                <img className="image--secondary" src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp_juice_card_fvm.png" alt="Juice" />
                              </td>
                              <td className="row--desc">
                                <ul className="desc--list">
                                  <li className="list--desc">
                                    <label htmlFor="title">Title</label>
                                    <p id="title">French Vanilla Mocha</p>
                                  </li>
                                  <li className="list--desc">
                                    <label htmlFor="sub-title">Nicotine</label>
                                    <p id="sub-title">6mg</p>
                                  </li>
                                  <li className="list-sku">
                                    <label htmlFor="sku">SKU</label>
                                    <p id="sku">{uuid()}</p>
                                  </li>
                                </ul>
                              </td>
                              <td className="row--page-views">
                                <ul className="page-views--list">
                                  <li className="list--visitors">
                                    <label htmlFor="title">Visitors</label>
                                    <p id="title">123123123</p>
                                  </li>
                                  <li className="list--members">
                                    <label htmlFor="title">Members</label>
                                    <p id="title">123123123</p>
                                  </li>
                                  <li className="list--time">
                                    <p>00:00:12</p>
                                    <p>per view</p>
                                  </li>
                                </ul>
                              </td>
                              <td className="row--clicks">
                                <ul className="clicks--list">
                                  <li className="list--visitors">
                                    <label htmlFor="title">Visitors</label>
                                    <p id="title">123123123</p>
                                  </li>
                                  <li className="list--members">
                                    <label htmlFor="title">Members</label>
                                    <p id="title">123123123</p>
                                  </li>
                                </ul>
                              </td>
                              <td className="row--added-to-cart">
                                <ul className="added-to-cart--list">
                                  <li className="list--visitors">
                                    <label htmlFor="title">Visitors</label>
                                    <p id="title">123123123</p>
                                  </li>
                                  <li className="list--members">
                                    <label htmlFor="title">Members</label>
                                    <p id="title">123123123</p>
                                  </li>
                                </ul>
                              </td>
                              <td className="row--purchased">
                                <ul className="purchased--list">
                                  <li className="list--once">
                                    <label htmlFor="title">Once</label>
                                    <p id="title">123123123</p>
                                  </li>
                                  <li className="list--repeat">
                                    <label htmlFor="title">Repeat</label>
                                    <p id="title">123123123</p>
                                  </li>
                                </ul>
                              </td>
                              <td className="row--rating">
                                <ul className="rating--list">
                                  <li className="list--entries">
                                    <label htmlFor="title">Entries</label>
                                    <p id="title">789 - {0.3 * 100}%</p>
                                  </li>
                                  <li className="list--grade">
                                    <label htmlFor="title">Grade</label>
                                    <p id="title">+ {0.86 * 100}%</p>
                                  </li>
                                </ul>
                              </td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="main__pending-products">
                    <div className="pending-products__header">
                      <div className="header__title admin-dash__small-title">
                        <h3>Pending Products(s)</h3>
                      </div>
                      <div className="header__msg">
                        <p>* Double click row to modify information</p>
                      </div>
                    </div>
                    <div className="pending-products__sub-header">
                      <div className="sub-header__icon">
                        <FontAwesome name="info-circle" />
                        <p>These are new product entries that are incomplete.  You must fill out all required fields before they will be added to the inventory.</p>
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
                            </tr>
                          </thead>
                          <tbody className="table__body">
                            <tr className="body__row">
                              <td className="row__image">
                                <img className="image--primary" src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp_juice_card_fvm.png" alt="Juice" />
                                <img className="image--secondary" src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp_juice_card_fvm.png" alt="Juice" />
                                <img className="image--secondary" src="https://s3-ap-northeast-1.amazonaws.com/nj2jp-images/nj2jp_juice_card_fvm.png" alt="Juice" />
                              </td>
                              <td className="row--desc">
                                <ul className="desc--list">
                                  <li className="list--desc">
                                    <label htmlFor="title">Title</label>
                                    <p id="title">French Vanilla Mocha</p>
                                  </li>
                                  <li className="list--desc">
                                    <label htmlFor="sub-title">Nicotine</label>
                                    <p id="sub-title">6mg</p>
                                  </li>
                                  <li className="list-sku">
                                    <label htmlFor="sku">SKU</label>
                                    <p id="sku">{uuid()}</p>
                                  </li>
                                </ul>
                              </td>
                              <td className="row--nicotine">
                                <div className="nicotine--option">
                                  <span>2mg</span>
                                </div>
                                <div className="nicotine--option">
                                  <span>4mg</span>
                                </div>
                                <div className="nicotine--option">
                                  <span>6mg</span>
                                </div>
                                <div className="nicotine--option">
                                  <span>8mg</span>
                                </div>
                              </td>
                              <td className="row--prices">
                                <div className="row__japanese">
                                  <p>{'\u00A5'} {'35'}.00</p>
                                </div>
                                <div className="row__usd">
                                  <p>$ {'30'}.00</p>
                                </div>
                              </td>
                              <td className="row--qty">
                                <p>35</p>
                              </td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <ProductsModal />
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
