import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/style.scss';

const HdrPage = props => (
  <div className="main__title">
    <h1 className="main__title title--header" data-ix="returns-slide-from-top">
      {props.header}
    </h1>
  </div>
);

HdrPage.propTypes = {
  header: PropTypes.string.isRequired,
};

export default HdrPage;
