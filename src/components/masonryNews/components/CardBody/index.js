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
  string,
} = PropTypes;

CardBody.propTypes = {
  header: string.isRequired,
  content: string.isRequired,
  link: string.isRequired,
};

export default CardBody;
