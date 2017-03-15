import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterContainer from './footer_container';

export default function Footer() {
  return (
    <Router>
      <div className="footer-main">
        <FooterContainer />
      </div>
    </Router>
  );
}
