import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

import {
  CardHeader,
  CardSubHeader,
  CardBlurb,
} from '../../components';

const CardBody = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="reviews-content__text">
      <CardHeader header={props.header} />
      <CardSubHeader subHeader={props.subHeader} />
      <CardBlurb blurb={props.content} />
    </div>
  );
};


const { string } = PropTypes;
CardBody.propTypes = {
  header: string,
  subHeader: string,
  content: string,
};

export default CardBody;
