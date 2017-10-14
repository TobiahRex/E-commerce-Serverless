import React from 'react';
import PropTypes from 'prop-types';
import { HdrBox } from './components';
import './assets/styles/style.css';

function ShippingAddress({ children }) {
  return (
    <div className="main-section__shipping">
      <HdrBox />
      {children}
    </div>
  );
}

const { arrayOf, object } = PropTypes;
ShippingAddress.propTypes = {
  children: arrayOf(object).isRequired,
};

export default ShippingAddress;
