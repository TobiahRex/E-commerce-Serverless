import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { WebflowJs } from './assets/utils';
import './assets/styles/style.scss';

const CardDae = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="content-date__container content-date__container--portrait">
      <div className="content-date content-date--landscape">
        <IntlMsg id={props.date} />
      </div>
    </div>
  );
};

CardDae.propTypes = {
  date: PropTypes.string.isRequired,
};

export default CardDae;
