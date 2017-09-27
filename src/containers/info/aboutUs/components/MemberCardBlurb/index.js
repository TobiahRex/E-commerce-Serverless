import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const MemberCardBlurb = props => (
  <div className="about-container__staff staff--scrolling-container">
    <p className="about-container__staff staff--bio-text">
      <IntlMsg id={props.blurb} />
    </p>
  </div>
);
MemberCardBlurb.propTypes = {
  blurb: PropTypes.string.isRequired,
};

export default MemberCardBlurb;
