import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const CardBlurb = (props) => {
  const {
    content,
  } = props;

  return (
    <p className="content-article news__content">
      <IntlMsg id={content} />
    </p>
  );
};

CardBlurb.propTypes = {
  content: PropTypes.string.isRequired,
};
export default CardBlurb;
