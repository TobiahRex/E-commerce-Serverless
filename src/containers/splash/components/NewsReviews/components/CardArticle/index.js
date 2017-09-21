import React from 'react';
import PropTypes from 'prop-types';
import {
  CardImgArticle,
  CardBodyArticle,
} from '../';

const CardArticle = ({ CardImg, CardBody }) => (
  <div className="masonry-column masonry-column__news">
    <CardImgArticle src={CardImg.src} />
    <CardBodyArticle
      header={CardBody.header}
      content={CardBody.content}
      link={CardBody.link}
    />
  </div>
);

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
