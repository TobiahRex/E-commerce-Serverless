import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const FooterHdr = ({ title }) => (
  <div className="general-column--container">
    <h3 className="footer-column__header footer-column__header--tablet">
      <IntlMsg id={title} />
    </h3>
  </div>
);

FooterHdr.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FooterHdr;
