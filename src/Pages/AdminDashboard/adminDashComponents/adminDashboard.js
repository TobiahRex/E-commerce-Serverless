import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminDashboard({ children }) {
  return (
    <div className="admindash--main">
      <div className="admindash--container">
        {children}
      </div>
    </div>
  );
}
AdminDashboard.propTypes = propTypes;
export default AdminDashboard;
