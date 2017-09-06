import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const MemberCardBlurb = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <p className="about-container__staff staff--bio-text">
      {props.blurb}
    </p>
  );
};
MemberCardBlurb.propTypes = {
  blurb: PropTypes.string.isRequired,
};

export default MemberCardBlurb;
