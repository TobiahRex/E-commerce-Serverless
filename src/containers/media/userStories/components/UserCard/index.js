import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/style.scss';

import {
  CardImg,
  CardHdr,
  CardDate,
  CardBlurb,
} from '../';

const UserCard = props => (
  <div className="animation--first user-stories__container user-stories__container--tablet">
    <div
      className="user-story-card__container user-story-card__container--landscape"
      data-ix="user-story-fade-in"
    >
      <CardImg link={props.CardImg.link} />
      <div className="user-story-card__content">
        <CardHdr header={props.CardHdr.header} />
        <CardDate date={props.CardDate.date} />
        <CardBlurb blurb={props.CardBlurb.blurb} />
      </div>
    </div>
  </div>
);

const {
  shape,
  string,
} = PropTypes;

UserCard.propTypes = {
  CardImg: shape({
    link: string,
  }).isRequired,
  CardHdr: shape({
    header: string,
  }).isRequired,
  CardDate: shape({
    date: string,
  }).isRequired,
  CardBlurb: shape({
    blurb: string,
  }).isRequired,
};

export default UserCard;
