import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

import {
  CardBlurbArticle,
  CardMoreLinkArticle,
  CardTitleArticle,
} from '../';


const CardBody = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="masonry-column__news news--content">
      <CardTitleArticle
        header={props.header}
        link={props.link}
      />
      <CardBlurbArticle
        content={props.content}
      />
      <CardMoreLinkArticle
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
