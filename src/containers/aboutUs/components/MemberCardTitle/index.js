import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { WebflowJs } from './assets/utils';

const MemberCardTitle = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="content--heading__container">
      <h3 className="content--heading staff__content">
        <IntlMsg id={props.header} />
      </h3>
      <h4 className="content--sub-heading staff__content">
        <IntlMsg id={props.subHeader} />
      </h4>
    </div>
  );
};
MemberCardTitle.propTypes = {
  header: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
};

export default MemberCardTitle;
