import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import uuid from 'uuid';

import Breadcrumb from '../../../../components/breadcrumbs';
import AdminSideBar from '../adminDashboard_sidebar/adminSideBar';
import AdminWelcomeMsg from '../adminDashboard_welcomeMsg/adminWelcomeMsg';

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
                <div className="body__total-sales">
                  <ul className="total-sales--list">
                    <li className="list--summary ">
                      <div className="summary--container">
                        <h3>Total Sales</h3>
                        <p>
                          $ {'9,800'}.00
                        </p>
                      </div>
                    </li>
                    <li className="list--web">
                      <div className="web--container">
                        <div className="web__pg-bar" />
                        <p>$ {'3,000'}.00</p>
                        <p>Web</p>
                      </div>
                    </li>
                    <li className="list--mobile">
                      <div className="mobile--container">
                        <div className="mobile__pg-bar" />
                        <p>$ {'6,000'}.00</p>
                        <p>Mobile</p>
                      </div>
                    </li>
                    <li className="list--other">
                      <div className="other--container">
                        <div className="other__pg-bar" />
                        <p>$ {'800'}.00</p>
                        <p>Other</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="body__total-profit">
                  <ul className="total-profit--list">
                    <li className="list--summary ">
                      <div className="summary--container">
                        <h3>Total Profit</h3>
                        <p>
                          $ {'10,000'}.00
                        </p>
                      </div>
                    </li>
                    <li className="list--expenses">
                      <div className="expenses--container">
                        <div className="expenses__pg-bar" />
                        <p>$ {'4,000'}.00</p>
                        <p>Expenses</p>
                      </div>
                    </li>
                    <li className="list--revenue">
                      <div className="revenue--container">
                        <div className="revenue__pg-bar" />
                        <p>$ {'14,000'}.00</p>
                        <p>Revenue</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="body__sales-increase">
                  <h3>Sales Increase</h3>
                  <ul className="sales-increase--list">
                    <li className="list--lifetime">
                      <div className="lifetime--container">
                        <h4>Lifetime</h4>
                        <p>+ {parseFloat('.8', 10) * 100}%</p>
                      </div>
                    </li>
                    <li className="list--ytd">
                      <div className="ytd--container">
                        <h4>YTD</h4>
                        <p>+ {parseFloat('.6', 10) * 100}%</p>
                      </div>
                    </li>
                    <li className="list--mtd">
                      <div className="mtd--container">
                        <h4>MTD</h4>
                        <p>+ {parseFloat('.13', 10) * 100}%</p>
                      </div>
                    </li>
                    <li className="list--WTD">
                      <div className="WTD--container">
                        <h4>WTD</h4>
                        <p>+ {parseFloat('.08', 10) * 100}%</p>
                      </div>
                    </li>
                    <li className="list--yesterday">
                      <div className="yesterday--container">
                        <h4>Yesterday</h4>
                        <p>+ {parseFloat('.02', 10) * 100}%</p>
                      </div>
                    </li>

                  </ul>
                </div>
                <div className="body__sales-conversions">
                  <h3>Sales Conversions</h3>
                  <ul className="sales-conersions--list">
                    <li className="list--adds-to-cart">
                      <div className="adds-to-cart--container">
                        <h4>Adds To Cart</h4>
                        <p>678</p>
                      </div>
                    </li>
                    <li className="list--checkouts">
                      <div className="checkouts--container">
                        <h4>Checkouts</h4>
                        <p>+ {parseFloat('.89', 10) * 100}%</p>
                      </div>
                    </li>
                    <li className="list--cart-b-rate">
                      <div className="cart-b-rate--container">
                        <h4>Cart B.Rate</h4>
                        <p>+ {parseFloat('.1', 10) * 100}%</p>
                      </div>
                    </li>
                    <li className="list--in-cart">
                      <div className="in-cart--container">
                        <h4>In Cart</h4>
                        <p>+ {parseFloat('.04', 10) * 100}%</p>
                      </div>
                    </li>
                    <li className="list--payment-rejections">
                      <div className="payment-rejections--container">
                        <h4>Payment Rejections</h4>
                        <p>+ {parseFloat('.02', 10) * 100}%</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="body__profit-loss">
                  <h3>Profit & Loss</h3>
                  <div className="profit-loss__table--revenue">
                    <table className="table--container">
                      <thead className="table__header">
                        <tr>
                          <th colSPan="4">
                            <h4>Revenue</h4>
                          </th>
                        </tr>
                        <tr className="header__row">
                          <th className="header--qty">
                            <p>#</p>
                          </th>
                          <th className="header--order">
                            <p>Order #</p>
                          </th>
                          <th className="header--date">
                            <p>Date</p>
                          </th>
                          <th className="header--total">
                            <p>Total</p>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="table__body ">
                        {/* TODO: Dyanmically render rows */}
                        <tr className="body__row">
                          <td className="row--qty">
                            <p>1</p>
                          </td>
                          <td className="row--order">
                            <p>Order # <Link to={`/order_${uuid()}`} >{uuid()}</Link> </p>
                          </td>
                          <td className="row--date">
                            <p>{new Date()}</p>
                          </td>
                          <td className="row--total">
                            <p>$ {'98'}.00</p>
                          </td>
                        </tr>
                        <tr className="body__row">
                          <td className="row--qty">
                            <p>1</p>
                          </td>
                          <td className="row--order">
                            <p>Order # <Link to={`/order_${uuid()}`} >{uuid()}</Link> </p>
                          </td>
                          <td className="row--date">
                            <p>{new Date()}</p>
                          </td>
                          <td className="row--total">
                            <p>$ {'98'}.00</p>
                          </td>
                        </tr>
                        <tr className="body__row">
                          <td className="row--qty">
                            <p>1</p>
                          </td>
                          <td className="row--order">
                            <p>Order # <Link to={`/order_${uuid()}`} >{uuid()}</Link> </p>
                          </td>
                          <td className="row--date">
                            <p>{new Date()}</p>
                          </td>
                          <td className="row--total">
                            <p>$ {'98'}.00</p>
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
  );
}
AdminSales.propTypes = propTypes;
export default AdminSales;
