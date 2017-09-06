import React from 'react';
import PropTypes from 'prop-types';

import { WebflowJs } from './assets/utils';

const MemberCardTitle = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div>
      <h3 className="content--heading staff__content">
        {props.header}
      </h3>
      <h4 className="content--sub-heading staff__content">
        {props.subHeader}
      </h4>
    </div>
  );
};
MemberCardTitle.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
};

export default MemberCardTitle;
