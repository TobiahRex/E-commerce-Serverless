import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../../../../components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';
import ProductReviews from './userDashboard_productReviews';

function UserProductReviews({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="product-reviews--main">
      <div className="product-reviews--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Login Apps"
        />
        <UserWelcomeMsg />
        <div className="product-reviews__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <div className="dashboard--title">
                <h1>Your Product Reviews</h1>
              </div>
              {/* <ProductReviews /> */}
              <ProductReviews.Mobile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const { objectOf, any } = PropTypes;
const propTypes = {
  location: objectOf(any).isRequired,
};
UserProductReviews.propTypes = propTypes;
export default UserProductReviews;
