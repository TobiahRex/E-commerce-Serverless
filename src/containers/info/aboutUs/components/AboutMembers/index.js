import React from 'react';
import PropTypes from 'prop-types';
import {
  WebflowJs,
} from './assets/utils';

import {
  MemberCard,
} from '../../components';

const AboutMembers = (props) => {
  WebflowJs(); //eslint-disable-line

  const renderHelper = data =>
  data.map((dataObj) => {
    if (dataObj.component === 'MemberCard') {
      return (
        <MemberCard
          {...dataObj.props}
          key={new Buffer(`${dataObj.props.MemberCardTitle.header + Date.now()}`, 'utf8').toString('base64')}
        />
      );
    }
    return '';
  });

  return (
    <div className="about-container about-container__staff">
      {renderHelper(props.members)}
    </div>
  );
};

const { arrayOf, object } = PropTypes;

AboutMembers.propTypes = {
  members: arrayOf(object).isRequired,
};

export default AboutMembers;
