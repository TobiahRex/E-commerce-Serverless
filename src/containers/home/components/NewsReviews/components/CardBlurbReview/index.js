import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMsg as IntlMsg } from 'react-intl';

const CardBlurb = ({ blurb }) => (
  <p className="reviews-content__text text--review">
    <IntlMsg id={blurb} />
  </p>
);

const { string } = PropTypes;
CardBlurb.propTypes = {
  blurb: string.isRequired,
};

export default CardBlurb;
