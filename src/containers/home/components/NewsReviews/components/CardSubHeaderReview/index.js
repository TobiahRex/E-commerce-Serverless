import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const CardSubHeader = ({ subHeader }) => (
  <p className="reviews-content__text text--sub-heading">
    <IntlMsg id={subHeader} />
  </p>
);

const { string } = PropTypes;
CardSubHeader.propTypes = {
  subHeader: string.isRequired,
};

export default CardSubHeader;
