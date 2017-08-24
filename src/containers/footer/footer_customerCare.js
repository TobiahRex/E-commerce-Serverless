import React from 'react';
import { Link } from 'react-router';

const juices = ['pina_colada', 'french_vanilla_mocha', 'strawberries_n_cream', 'fruity_bamm_bamm', 'papple_berry', 'key_lime_pie'];

export default function FooterMemberships() {
  return (
    <li className="footer-main-sections-list-customercare">
      <h3 className="footer-main-sections-customercare-title">
        Customer Care
      </h3>
      <ul className="footer-main-sections-customercare-list">
        <li className="footer-main-sections-customercare-shop hover-bob">
          <Link to={`/juice/${juices[Math.floor(Math.random() * (juices.length - 1))]}`}>Shop</Link>
        </li>
        <li className="footer-main-sections-customercare-shipping hover-bob">
          <Link to="/shipping_policy">Shipping Policy</Link>
        </li>
        <li className="footer-main-sections-customercare-returns hover-bob">
          <Link to="/return_policy">Return Policy</Link>
        </li>
        <li className="footer-main-sections-customercare-privacy hover-bob">
          <Link to="/privacy_policy">Privacy Policy</Link>
        </li>
        <li className="footer-main-sections-customercare-terms hover-bob">
          <Link to="/terms_and_conditions">Terms & Conditions</Link>
        </li>
        <li className="footer-main-sections-customercare-nicotine hover-bob">
          <Link to="/nicotine_disclaimer">Nicotine Disclaimer</Link>
        </li>
      </ul>
    </li>
  );
}
