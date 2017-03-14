import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

const propTypes = {
  classes: PropTypes.arrayOf(PropTypes.string.isRequired),
  paths: PropTypes.arrayOf(PropTypes.string.isRequired),
}
/*
  paths = ['Home', 'Your Account']
  classes = ['home', 'your-account']
*/
function BreadCrumbs({ paths, classes }) {
  const breadcrumbs = paths.map((path) => {
    <li className={`list--${path}`}>
      <Link className="breadcrumb-link" to="/">
        Home
      </Link>
      <FontAwesome name="angle-right" />
    </li>
  })
  return (
    <div className="userdash__breadcrumb">
      <ul className="breadcrumb--list">
        {/* <li className="list--home">
          <Link className="breadcrumb-link" to="/">
            Home
          </Link>
          <FontAwesome name="angle-right" />
        </li> */}
        <li className="list--your-account">
          <Link className="breadcrumb-link" to="/user_123123123">
            Your Account
          </Link>
          <FontAwesome name="angle-right" />
        </li>
        <li className="list--active">
          <p>Home Dashboard</p>
        </li>
      </ul>
    </div>
  )
}

BreadCrumbs.propTypes = propTypes;
export default BreadCrumbs
