import React, { PropTypes } from 'react';
import 'react-router';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';
import ProductReviews from './userDashboard_productReviews';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

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
UserProductReviews.propTypes = propTypes;
export default UserProductReviews;
