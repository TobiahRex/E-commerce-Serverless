import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

import {
  CardImgArticle,
  CardBodyArticle,

} from '../../components';

const CardArticle = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="masonry-column masonry-column__news">
      <CardImgArticle src={props.CardImg.src} />
      <CardBodyArticle
        header={props.CardBody.header}
        content={props.CardBody.content}
        link={props.CardBody.link}
      />
    </div>
  );
};

const {
  string,
  shape,
} = PropTypes;
CardArticle.propTypes = {
  CardImg: shape({
    src: string,
  }).isRequired,
  CardBody: shape({
    header: string,
    content: string,
    link: string,
  }).isRequired,
};

export default CardArticle;
