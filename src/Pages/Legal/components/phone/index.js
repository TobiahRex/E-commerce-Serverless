import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default function Phone() {
  return (
    <div className="phone__main">
      <div className="main__breadcrumb--container">
        <ul className="breadcrumb--list">
          <li className="list--home">
            <Link to="/">
              Home
              <FontAwesome className="breadcrumb-chevron-right" name="angle-right" />
            </Link>
          </li>
          <li className="list--path last">
            Phone
          </li>
        </ul>
      </div>
      <div className="main__title">
        <h1>Phone</h1>
      </div>
      <div className="main__body">
        <h1> (123)-456-7890 </h1>
      </div>
    </div>
  );
}
