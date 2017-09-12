import React from 'react';
import PropTypes from 'prop-types';

const FooterColumn = ({ section, children }) => (
  <div className={`grid__${section}-column grid__${section}-column--landscape w-col w-col-3`}>
    {children}
  </div>
);

const { arrayOf, any, string } = PropTypes;
FooterColumn.propTypes = {
  section: string.isRequired,
  children: arrayOf(any).isRequired,
};

export default FooterColumn;
