import React from 'react';
import './assets/css/styles.css';
import {
  FooterUpper,
  FooterLower,
} from './components';

const Footer = () => (
  <div className="footer__container footer__container--landscape">
    <FooterUpper />
    <FooterLower />
  </div>
);

export default Footer;
