import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';
import './assets/styles/style.scss';

const CardImg = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="user-story-card__image user-story-card__image--landscape">
      <img
        alt="avatar"
        className="image image--landscape"
        src={props.link}
      />
    </div>
  );
};

CardImg.propTypes = {
  link: PropTypes.string.isRequired,
};

export default CardImg;
