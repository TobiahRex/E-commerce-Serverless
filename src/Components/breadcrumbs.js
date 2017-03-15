// NOTE: Description below.

import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const propTypes = {
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
  classes: PropTypes.arrayOf(PropTypes.string).isRequired,
  destination: PropTypes.arrayOf(PropTypes.string).isRequired,
  lastCrumb: PropTypes.string.isRequired,
};
function BreadCrumb({ paths, classes, destination, lastCrumb }) {
  const breadcrumbs = paths.map((path, i) => (
    <li
      key={`breadcrumb-${classes[i]}-${i}`}
      className={`list--${classes[i]}`}
    >
      <Link className="breadcrumb-link" to={`/${destination[i]}`}>
        {path}
      </Link>
      <FontAwesome name="angle-right" />
    </li>
  ));
  console.warn('breacrumbs: ', breadcrumbs);

  return (
    <div className="userdash__breadcrumb breadcrumbs">
      <ul className="breadcrumb--list">
        {breadcrumbs}
        <li
          key="last-crumb"
          className="list--active"
        >
          <p>{lastCrumb}</p>
        </li>
      </ul>
    </div>
  );
}

BreadCrumb.propTypes = propTypes;
export default BreadCrumb;

/* Description:
This dynamically generates a breadcrumb component.  It receives an array of classes that MUST match the style sheet.  Because the styling convention for this app uses BEM syntax, dynamically assigning these values should be simple and straight forward.  An example below.

paths = ['Home', 'Your Account']
classes = ['home', 'your-account']
destination = ['/', 'user_123123123']
lastCrumb = "Home Dashboard"

Result =
<li className="list--home">
  <Link className="breadcrumb-link" to="/">
    Home
  </Link>
  <FontAwesome name="angle-right" />
  </li>
  <li className="list--your-account">
  <Link className="breadcrumb-link" to="/user_123123123">
    Your Account
  </Link>
  <FontAwesome name="angle-right" />
</li>

NOTE: Adding a "key" prop to the last crumb is important for Reconcilliation.
*/
