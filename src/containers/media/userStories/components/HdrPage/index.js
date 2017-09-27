import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.scss';

const HdrPage = props => (
  <div className="main__title">
    <h1 className="main__title title--header">
      <IntlMsg id={props.header} />
    </h1>
  </div>
);

HdrPage.propTypes = {
  header: PropTypes.string.isRequired,
};

export default HdrPage;
