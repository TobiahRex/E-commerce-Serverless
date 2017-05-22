import React from 'react';
import PropTypes from 'prop-types';


function MainTitle({ vendor, mainTitle }) {
  return (
    <div className="main__title">
      <h1>{mainTitle} by {vendor}</h1>
    </div>
  );
}
const { string } = PropTypes;
MainTitle.propTypes = {
  vendor: string.isRequired,
  mainTitle: string.isRequired,
};
export default MainTitle;
