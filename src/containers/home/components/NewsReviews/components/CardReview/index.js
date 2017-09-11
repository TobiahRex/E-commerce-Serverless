import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

import {
  CardImgReview,
  CardBodyReview,
} from '../';

const CardReview = (props) => {
  WebflowJs();

  return (
    <div className="masonry-container masonry-container__reviews">
      <div className="reviews__content">
        <div className="reviews-content">
          <CardImgReview src={props.CardImg.src} />
          <CardBodyReview
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
