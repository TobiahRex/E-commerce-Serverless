import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const CardMoreLink = ({ link }) => (
  <a
    className="content--read-more-link news__content"
    href={link}
    rel="noopener noreferrer"
    target="_blank"
  >
    <IntlMsg id="home.news.article.readMore" />
  </a>
);
CardMoreLink.propTypes = {
  link: PropTypes.string.isRequired,
};

export default CardMoreLink;
