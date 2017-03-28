import React, { PropTypes } from 'react';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminDashReportsWeb() {
  return (
    <div className="dashboard__aws-stats">
      <div className="aws-stats__title admin-dash__small-title">
        <h3>AWS Stats</h3>
      </div>
      <div className="aws-stats__body">
        <p>{'<Stats Here>'}</p>
      </div>
    </div>
  );
}
AdminDashReportsWeb.propTypes = propTypes;
export default AdminDashReportsWeb;
