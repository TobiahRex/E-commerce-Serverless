import React, { PropTypes } from 'react';
import 'react-router';
import Breadcrumb from '../../../../Components/breadcrumbs';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
};

function UserAddressBook({ location }) {
  const homeDashboard = location.pathname.split('/')[1];
  return (
    <div className="address-book--container">
      <Breadcrumb
        paths={['Home', 'Your Account']}
        classes={['home', 'your-account']}
        destination={['/', homeDashboard]}
        lastCrumb="Address Book"
      />
      <h1>Address Book</h1>
    </div>
  );
}
UserAddressBook.propTypes = propTypes;
export default UserAddressBook;
