import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.scss';

const CardDae = props => (
  <div className="content-date__container content-date__container--portrait">
    <div className="content-date content-date--landscape">
      <IntlMsg id={props.date} />
    </div>
  </div>
);

CardDae.propTypes = {
  date: PropTypes.string.isRequired,
};

export default CardDae;
