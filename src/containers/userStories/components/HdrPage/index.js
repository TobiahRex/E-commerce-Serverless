import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';
import './assets/styles/style.scss';

const HdrPage = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="main__title">
      <h1 className="main__title title--header">
        {props.header}
      </h1>
    </div>
  );
};

HdrPage.propTypes = {
  header: PropTypes.string.isRequired,
};

export default HdrPage;
