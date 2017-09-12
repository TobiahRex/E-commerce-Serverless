import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/style.scss';

const CardImg = props => (
  <div className="user-story-card__image user-story-card__image--landscape">
    <img alt="avatar" className="image image--landscape" src={props.link} />
  </div>
);

CardImg.propTypes = {
  link: PropTypes.string.isRequired,
};

export default CardImg;
