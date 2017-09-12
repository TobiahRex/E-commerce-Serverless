import React from 'react';
import PropTypes from 'prop-types';
import {
  CardBlurbArticle,
  CardMoreLinkArticle,
  CardTitleArticle,
} from '../';


const CardBody = ({ link, content, header }) => (
  <div className="masonry-column__news news--content">
    <CardTitleArticle
      header={header}
      link={link}
    />
    <CardBlurbArticle
      content={content}
    />
    <CardMoreLinkArticle
      link={link}
    />
  </div>
);

const {
  string,
} = PropTypes;

CardBody.propTypes = {
  header: string.isRequired,
  content: string.isRequired,
  link: string.isRequired,
};

export default CardBody;
