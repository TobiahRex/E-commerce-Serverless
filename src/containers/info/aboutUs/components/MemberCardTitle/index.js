import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const MemberCardTitle = props => (
  <h3 className={props.class}>
    <IntlMsg id={props.title} />
  </h3>
);

MemberCardTitle.propTypes = {
  class: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MemberCardTitle;
