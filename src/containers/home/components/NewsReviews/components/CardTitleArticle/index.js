import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const CardTitleArticle = (props) => {
  const {
    link,
    header,
  } = props;

  return (
    <a
      className="masonry-column__news news--heading-link w-inline-block"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h3 className="content--header news__content" >
        <IntlMsg id={header} />
      </h3>
    </a>
  );
};
CardTitleArticle.propTypes = {
  link: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default CardTitleArticle;
