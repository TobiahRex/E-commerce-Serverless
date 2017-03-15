import React, { PropTypes } from 'react';
// import UserHomeDash from './userDashboard_home/userHomeDash';

const propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

function UserDashboard({ children }) {
  return (
    <div className="userdash--main">
      <div className="userdash--container">
        {children}
      </div>
    </div>
  );
}
UserDashboard.propTypes = propTypes;
export default UserDashboard;
