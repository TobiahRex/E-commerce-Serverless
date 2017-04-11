import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  // location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminDashHeaderWeb() {
  return (
    <div className="dashboard__header">
      <div className="dashboard__stats--container">
        <ul className="stats--list">
          <li className="list--stat">
            <div className="stat--visits">
              <h3>230</h3>
              <p>Visits Today</p>
            </div>
          </li>
          <li className="list--stat">
            <div className="stat--sales">
              <h3>24</h3>
              <p>Sales Today</p>
            </div>
          </li>
          <li className="list--stat">
            <div className="stat--new-members">
              <h3>10</h3>
              <p>New Members</p>
              <p>Today</p>
            </div>
          </li>
          <li className="list--stat">
            <div className="stat--revenue">
              <h3>
                <FontAwesome name="usd" />{'\u00A0'}1,200</h3>
              <p>Revenue Today</p>
            </div>
          </li>
          <li className="list--stat">
            <div className="stat--bounce-rate">
              <h3>1</h3>
              <p>Bounce Rate</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
AdminDashHeaderWeb.propTypes = propTypes;
export default AdminDashHeaderWeb;
