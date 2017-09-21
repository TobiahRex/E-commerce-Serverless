import React from 'react';
import PropTypes from 'prop-types';
import {
  CardHeaderReview,
  CardSubHeaderReview,
  CardBlurbReview,
} from '../';

const CardBody = ({ header, subHeader, content }) => (
  <div className="reviews-content__text">
    <CardHeaderReview header={header} />
    <CardSubHeaderReview subHeader={subHeader} />
    <CardBlurbReview blurb={content} />
  </div>
);

const { string } = PropTypes;
CardBody.propTypes = {
  header: string.isRequired,
  subHeader: string.isRequired,
  content: string.isRequired,
};

export default CardBody;
