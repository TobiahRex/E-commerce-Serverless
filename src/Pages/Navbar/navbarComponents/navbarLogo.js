import React from 'react';
import { Link } from 'react-router';

export default () => (
  <Link to={'/'}>
    <div className="navbar logoContainer">
      <div className="navbar navbar-logo" />
    </div>
  </Link>
);
