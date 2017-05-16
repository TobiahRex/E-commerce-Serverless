import React from 'react';
import PropTypes from 'prop-types';

function AdminDashboard({ children }) {
  return (
    <div className="admin-dash--main">
      <div className="admin-dash--container">
        {children}
      </div>
    </div>
  );
}
const { objectOf, any } = PropTypes;
const propTypes = { children: objectOf(any).isRequired };
AdminDashboard.propTypes = propTypes;
export default AdminDashboard;
