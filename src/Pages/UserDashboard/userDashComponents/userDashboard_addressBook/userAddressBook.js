import React, { PropTypes } from 'react';
import 'react-router';
import Breadcrumb from '../../../../Components/breadcrumbs';
import UserSideBar from '../userDashboard_sidebar/userSideBar';
import UserWelcomeMsg from '../userDashboard_welcomeMsg/userWelcomeMsg';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function UserAddressBook({ location }) {
  console.warn('location: ', location);
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="address-book--main">
      <div className="address-book--container">
        <Breadcrumb
          paths={['Home', 'Your Account']}
          classes={['home', 'your-account']}
          destination={['', homeDashboard]}
          lastCrumb="Address Book"
        />
        <UserWelcomeMsg />
        <div className="address-book__body">
          <UserSideBar location={location} />
          <div className="body__dashboard">
            <div className="dashboard--container">
              <h2>Address Book</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
UserAddressBook.propTypes = propTypes;
export default UserAddressBook;
