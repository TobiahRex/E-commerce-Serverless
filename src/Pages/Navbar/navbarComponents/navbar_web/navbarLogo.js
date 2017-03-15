import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarLogo() {
  return (
    <div className="navbar logoContainer">
      <Link to="/">
        <div className="navbar navbar-logo" />
      </Link>
    </div>
  );
}
