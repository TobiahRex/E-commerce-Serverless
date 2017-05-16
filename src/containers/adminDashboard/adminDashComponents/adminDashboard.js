import React from 'react';

const propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminDashboard({ children }) {
  return (
    <div className="admin-dash--main">
      <div className="admin-dash--container">
        {children}
      </div>
    </div>
  );
}
AdminDashboard.propTypes = propTypes;
export default AdminDashboard;
