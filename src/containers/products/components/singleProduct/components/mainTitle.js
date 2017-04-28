import React from 'react';
import PropTypes from 'prop-types';

function MainTitle({ mainTitle }) {
  return (
    <div className="main__title">
      <h1>{mainTitle}</h1>
    </div>
  );
}
MainTitle.propTypes = {
  mainTitle: PropTypes.string.isRequired,
};
export default MainTitle;
