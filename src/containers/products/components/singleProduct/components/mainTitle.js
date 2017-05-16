import React from 'react';
import PropTypes from 'prop-types';


function MainTitle({ mainTitle }) {
  return (
    <div className="main__title">
      <h1>{mainTitle}</h1>
    </div>
  );
}
const { string } = PropTypes;
MainTitle.propTypes = {
  mainTitle: string.isRequired,
};
export default MainTitle;
