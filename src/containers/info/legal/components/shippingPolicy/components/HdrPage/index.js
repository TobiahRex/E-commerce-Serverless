import React from 'react';
import PropTypes from 'prop-types';
import './assets/styles/style.scss';

const HdrPage = props => (
  <div className="main__title" data-ix="slide-from-top">
    <h1 className="main__title title--header">
      {props.header}
    </h1>
  </div>
);

HdrPage.propTypes = {
  header: PropTypes.string.isRequired,
};

export default HdrPage;
