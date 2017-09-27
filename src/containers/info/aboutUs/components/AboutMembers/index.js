import React from 'react';
import PropTypes from 'prop-types';
import {
  MemberCard,
} from '../../components';

const AboutMembers = (props) => {
  const renderHelper = data =>
  data.map((dataObj) => {
    if (dataObj.component === 'MemberCard') {
      return (
        <MemberCard
          {...dataObj.props}
          key={new Buffer(`${dataObj.props.ix + Date.now()}`, 'utf8').toString('base64')}
        />
      );
    }
    return '';
  });

  return (
    <div className="about-section">
      <div className="abouet-container">
        <div className="about-container__staff--section">
          {renderHelper(props.members.slice(0, 2))}
        </div>
        <div className="about-container__staff--section">
          {renderHelper(props.members.slice(2, 4))}
        </div>
      </div>
    </div>
  );
};

const { arrayOf, object } = PropTypes;
AboutMembers.propTypes = {
  members: arrayOf(object).isRequired,
};

export default AboutMembers;
