import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any),
};

function AdminSalesSideBar() {
  // const adminDashboard = location.pathname.split('/')[1];
  // console.warn('adminDashboard: ', adminDashboard);
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
        </div>
      </div>
    </div>
  );
}
AdminSalesSideBar.propTypes = propTypes;
export default AdminSalesSideBar;
