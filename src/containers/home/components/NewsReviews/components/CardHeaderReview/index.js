import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const CardHeader = ({ header }) => (
  <h3 className="reviews-content__text text--heading">
    <IntlMsg id={header} />
  </h3>
);

const { string } = PropTypes;
CardHeader.propTypes = {
  header: string.isRequired,
};

export default CardHeader;
