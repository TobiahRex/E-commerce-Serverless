import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';
import './assets/styles/style.scss';

const CardDate = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="content-date__container content-date__container--portrait">
      <p className="content-date content-date--landscape">{props.date}</p>
    </div>
  );
};

CardDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default CardDate;
