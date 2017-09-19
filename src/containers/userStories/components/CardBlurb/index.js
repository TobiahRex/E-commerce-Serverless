import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.scss';

const CardHdr = props => (
  <div className="content-blurb__container content-blurb__container--portrait">
    <p className="content-blurb content-blurb--portrait">
      <IntlMsg id={props.blurb} />
    </p>
  </div>
);

CardHdr.propTypes = {
  blurb: PropTypes.string.isRequired,
};

export default CardHdr;
