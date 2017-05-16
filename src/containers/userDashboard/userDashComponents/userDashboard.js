import React from 'react';
import PropTypes from 'prop-types';

function UserDashboard({ children }) {
  return (
    <div className="userdash--main">
      <div className="userdash--container">
        {children}
      </div>
    </div>
  );
}
const { objectOf, any } = PropTypes;
const propTypes = {
  children: objectOf(any).isRequired,
};
UserDashboard.propTypes = propTypes;
export default UserDashboard;
