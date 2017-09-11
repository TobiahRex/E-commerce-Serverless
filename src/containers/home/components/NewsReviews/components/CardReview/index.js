import React from 'react';
import PropTypes from 'prop-types';
import {
  CardImgReview,
  CardBodyReview,
} from '../';

const CardReview = ({ CardImg, CardBody }) => (
  <div className="masonry-container masonry-container__reviews">
    <div className="reviews__content">
      <div className="reviews-content">
        <CardImgReview src={CardImg.src} />
        <CardBodyReview
          header={CardBody.header}
          subHeader={CardBody.subHeader}
          content={CardBody.content}
        />
      </div>
    </div>
  </div>
);

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
