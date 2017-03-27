import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function AdminSideBar({ location }) {
  const adminDashboard = location.pathname.split('/')[1];
  console.warn('adminDashboard: ', adminDashboard);
  return (
    <div className="body__sidebar">
      <div className="sidebar--container">
        <div className="sidebar__title">
          <h3>Your Account</h3>
        </div>
        <ul className="sidebar__menu-list">
          <li className="list--admin-dashboard sweep-right">
            <Link to={`/${adminDashboard}`}>
              <p>Admin Dashboard</p>
            </Link>
          </li>

          <li className="list--address-book sweep-right">
            <Link to={`/${adminDashboard}/reports`}>
              <p>Reports</p>
            </Link>
          </li>

          <li className="list--orders sweep-right">
            <Link to={`/${adminDashboard}/sales`}>
              <p>Sales</p>
            </Link>
          </li>

          <li className="list--product-reviews sweep-right">
            <Link to={`/${adminDashboard}/traffic`}>
              <p>Traffic</p>
            </Link>
          </li>

          <li className="list--login-apps sweep-right">
            <Link to={`/${adminDashboard}/products`}>
              <p>Products</p>
            </Link>
          </li>
          
          <li className="list--newsletters sweep-right">
            <Link to={`/${adminDashboard}/members`}>
              <p>Members</p>
            </Link>
          </li>

          <li className="list--legal-terms-conditions sweep-right">
            <Link to={`/${adminDashboard}/promotions`}>
              <p>Promotions & Sales</p>
            </Link>
          </li>

          <li className="list--legal-privacy sweep-right">
            <Link to={`/${adminDashboard}/terms_and_conditions`}>
              <p>Terms & Conditions</p>
            </Link>
          </li>

          <li className="list--legal-return sweep-right">
            <Link to={`/${adminDashboard}/privacy_policy`}>
              <p>Privacy Policy</p>
            </Link>
          </li>

          <li className="list--legal-nicotine-disclaimer sweep-right">
            <Link to={`/${adminDashboard}/shipping_policy`}>
              <p>Shipping Policy</p>
            </Link>
          </li>

          <li className="list--legal-manage-login sweep-right">
            <Link to={`/${adminDashboard}/return_policy`}>
              <p>Returns Policy</p>
            </Link>
          </li>
          <li className="list--legal-manage-login sweep-right">
            <Link to={`/${adminDashboard}/nicotine_disclaimer`}>
              <p>Nicotine Disclaimer</p>
            </Link>
          </li>
          <li className="list--legal-manage-login sweep-right">
            <Link to={`/${adminDashboard}/manage_login`}>
              <p>Manage Login</p>
            </Link>
          </li>

          <li className="list--legal-faqs sweep-right">
            <Link to={`/${adminDashboard}/faqs`}>
              <p>{'FAQ\'s'}</p>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  );
}
AdminSideBar.propTypes = propTypes;
export default AdminSideBar;
