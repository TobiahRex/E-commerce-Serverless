import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

import {
  CardBlurb,
  CardMoreLink,
  CardTitle,
} from '../../components';


const CardBody = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="masonry-column__news news--content">
      <CardTitle
        header={props.header}
      />
      <CardBlurb
        content={props.content}
      />
      <CardMoreLink
        link={props.link}
      />
    </div>
  );
};

const {
  arrayOf,
  any,
  string,
  // shape,
} = PropTypes;

CardBody.propTypes = {
  children: arrayOf(any).isRequired,
  header: string.isRequired,
  content: string.isRequired,
  link: string.isRequired,
};

export default CardBody;
