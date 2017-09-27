import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const MemberCardSubTitle = props => (
  <h4 className={props.class}>
    <IntlMsg id={props.title} />
  </h4>
);

MemberCardSubTitle.propTypes = {
  class: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MemberCardSubTitle;
