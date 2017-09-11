import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

import {
  CardHeaderReview,
  CardSubHeaderReview,
  CardBlurbReview,
} from '../';

const CardBody = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="reviews-content__text">
      <CardHeaderReview header={props.header} />
      <CardSubHeaderReview subHeader={props.subHeader} />
      <CardBlurbReview blurb={props.content} />
    </div>
  );
};


const { string } = PropTypes;
CardBody.propTypes = {
  header: string.isRequired,
  subHeader: string.isRequired,
  content: string.isRequired,
};

export default CardBody;
