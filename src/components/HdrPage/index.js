import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

const HdrPage = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="main__title">
      <h1 className="main__title tittle--header">
        {props.header}
      </h1>
    </div>
  );
};

HdrPage.propTypes = {
  header: PropTypes.string.isRequired,
};

export default HdrPage;
