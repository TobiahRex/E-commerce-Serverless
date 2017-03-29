import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const defaultProps = {
  location: {},
};
const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminSalesSideBar({ location }) {
  const adminDashboard = location.pathname.split('/')[1];
  console.warn('adminDashboard: ', adminDashboard);
  return (
    <div className="body__today-sales">
      <div className="today-sales--container">
        <div className="today-sales__title">
          <h3>{'Today\'s'} Sales</h3>
        </div>
        <div className="today_sales__total-profit">
          <h3 className="total-profit">Total Profit</h3>
          <p>
            <FontAwesome name="usd" />{'\u00A0'}
            9,800
          </p>
          <p>112 Purchases</p>
        </div>

        <div className="today_sales__sales-growth--container">
          <ul className="sales-growth--list">
            <li className="list--growth">
              <div className="yearly">
                <h3>YTD</h3>
                <p>+5 %</p>
              </div>
            </li>
            <li className="list--growth">
              <div className="monthly">
                <h3>MTD</h3>
                <p>+5 %</p>
              </div>
            </li>
            <li className="list--growth">
              <div className="weekly">
                <h3>WTD</h3>
                <p>+5 %</p>
              </div>
            </li>
            <li className="list--growth">
              <div className="yesterday">
                <h3>Yesterday</h3>
                <p>+5 %</p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
AdminSalesSideBar.defaultProps = defaultProps;
AdminSalesSideBar.propTypes = propTypes;
export default AdminSalesSideBar;
