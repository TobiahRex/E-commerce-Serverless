import React from 'react';
import { Link } from 'react-router';

export default () => (
  <div className="navbar logoContainer">
    <Link to={'/'}>
      <div className="navbar navbar-logo" />
    </Link>
  </div>
);
