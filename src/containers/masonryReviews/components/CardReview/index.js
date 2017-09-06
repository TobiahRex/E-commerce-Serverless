import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

import {
  CardImg,
  CardBody,
} from '../../components';

const CardReview = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="masonry-container masonry-container__reviews">
      <div className="reviews__content">
        <div className="reviews-content">
          <CardImg src={props.CardImg.src} />
          <CardBody
            header={props.CardBody.header}
            subHeader={props.CardBody.subHeader}
            content={props.CardBody.content}
          />
        </div>
      </div>
    </div>
  );
};

const {
  string,
  shape,
} = PropTypes;
CardReview.propTypes = {
  CardImg: shape({
    src: string,
  }).isRequired,
  CardBody: shape({
    header: string,
    subHeader: string,
    content: string,
  }).isRequired,
};

export default CardReview;
