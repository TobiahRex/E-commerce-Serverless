import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import uuid from 'uuid';

const defaultProps = {
  location: {},
};

const propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

function AdminSideBar({ location }) {
  const adminDashboard = location.pathname.split('/')[1];
  console.warn('adminDashboard: ', adminDashboard);
  return (
    <div className="body__online-members">
      <div className="online-members--container">
        <div className="online-members__title">
          <h3>Members Online</h3>
        </div>
        <div className="online-members__readout">
          <ul className="readout--list">
            <li className="list--member">
              <Link className="member-link" to={`/user_${uuid()}`}>
                Bruce Wayne
              </Link>
            </li>
            <li className="list--member">
              <Link className="member-link" to={`/user_${uuid()}`}>
                Clark Kent
              </Link>
            </li>
            <li className="list--member">
              <Link className="member-link" to={`/user_${uuid()}`}>
                Barry Allen
              </Link>
            </li>
            <li className="list--member">
              <Link className="member-link" to={`/user_${uuid()}`}>
                Diana Prince
              </Link>
            </li>
          </ul>
        </div>

        <div className="online-members__table">
          <div className="table__total">
            <h3>Total</h3>
            <p>45</p>
          </div>
          <div className="table__members">
            <h4>Members</h4>
            <p>30</p>
          </div>
          <div className="table__guests">
            <h4>Guests</h4>
            <p>15</p>
          </div>
        </div>
      </div>
    </div>
  );
}
AdminSideBar.defaultProps = defaultProps;
AdminSideBar.propTypes = propTypes;
export default AdminSideBar;
