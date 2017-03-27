import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function AdminSideBar({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  console.warn('homeDashboard: ', homeDashboard);
  return (
    <div className="body__sidebar">
      <div className="sidebar--container">
        <div className="sidebar__title">
          <h3>Your Account</h3>
        </div>
        <ul className="sidebar__menu-list">
          <li className="list--admin-dashboard sweep-right">
            <Link to={`/${homeDashboard}`}>
              <p>Admin Dashboard</p>
            </Link>
          </li>

          <li className="list--address-book sweep-right">
            <Link to={`/${homeDashboard}/address_book`}>
              <p>Reports</p>
            </Link>
          </li>

          <li className="list--orders sweep-right">
            <Link to={`/${homeDashboard}/orders`}>
              <p>Sales</p>
            </Link>
          </li>

          <li className="list--product-reviews sweep-right">
            <Link to={`/${homeDashboard}/product_reviews`}>
              <p>Traffic</p>
            </Link>
          </li>

          <li className="list--login-apps sweep-right">
            <Link to={`/${homeDashboard}/login_apps`}>
              <p>Products</p>
            </Link>
          </li>

          <li className="list--newsletters sweep-right">
            <Link to={`/${homeDashboard}/newsletter`}>
              <p>Members</p>
            </Link>
          </li>

          <li className="list--legal-terms-conditions sweep-right">
            <Link to={`/${homeDashboard}/terms_and_conditions`}>
              <p>Promotions & Sales</p>
            </Link>
          </li>

          <li className="list--legal-privacy sweep-right">
            <Link to={`/${homeDashboard}/privacy_policy`}>
              <p>Terms & Conditions</p>
            </Link>
          </li>

          <li className="list--legal-shipping sweep-right">
            <Link to={`/${homeDashboard}/shipping_policy`}>
              <p>Terms & Conditions</p>
            </Link>
          </li>

          <li className="list--legal-return sweep-right">
            <Link to={`/${homeDashboard}/return_policy`}>
              <p>Privacy Policy</p>
            </Link>
          </li>

          <li className="list--legal-nicotine-disclaimer sweep-right">
            <Link to={`/${homeDashboard}/nicotine_disclaimer`}>
              <p>Shipping Policy</p>
            </Link>
          </li>

          <li className="list--legal-manage-login sweep-right">
            <Link to={`/${homeDashboard}/manage_login`}>
              <p>Returns Policy</p>
            </Link>
          </li>
          <li className="list--legal-manage-login sweep-right">
            <Link to={`/${homeDashboard}/manage_login`}>
              <p>Nicotine Disclaimer</p>
            </Link>
          </li>
          <li className="list--legal-manage-login sweep-right">
            <Link to={`/${homeDashboard}/manage_login`}>
              <p>Manage Login</p>
            </Link>
          </li>

          <li className="list--legal-faqs sweep-right">
            <Link to={`/${homeDashboard}/faqs`}>
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
