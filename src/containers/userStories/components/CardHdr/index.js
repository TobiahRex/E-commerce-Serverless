import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.scss';

const CardHdr = props => (
  <div className="content-hdr__container content-hdr__container--portrait">
    <h2 className="content-hdr content-hdr--landscape">
      <IntlMsg id={props.header} />
    </h2>
  </div>
);

CardHdr.propTypes = {
  header: PropTypes.string.isRequired,
};

export default CardHdr;
