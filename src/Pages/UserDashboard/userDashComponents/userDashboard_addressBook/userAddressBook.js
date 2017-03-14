import React, { PropTypes } from 'react';
import Breadcrumb from '../../../../Components/breadcrumbs';

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any.isRequired),
};

function UserAddressBook({ location }) {
  const homeDashboard = location.pathname.split('/')[0];
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
