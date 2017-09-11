import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const CardTitleReview = (props) => {
  const {
    header,
  } = props;

  return (
    <a
      className="masonry-column__news news--heading-link w-inline-block"
      href="http://www.vapingpost.com/2017/05/03/air-sampling-confirms-secondhand-vapor-is-harmless/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <h3 className="content--header news__content">
        <IntlMsg id={header} />
      </h3>
    </a>
  );
};
CardTitleReview.propTypes = {
  header: PropTypes.string.isRequired,
};

export default CardTitleReview;
