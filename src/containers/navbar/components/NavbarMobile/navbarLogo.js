import React from 'react';
import { Link } from 'react-router';

export default function NavbarLogo() {
  return (
    <Link to="/">
      <div className="navbar__mobile--logo">
        <img className="logo--src" alt="nj2jp logo" />
      </div>
    </Link>
  );
}
