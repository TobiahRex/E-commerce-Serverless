import React from 'react';
import PropTypes from 'prop-types';

function ImageGroup({ imageUrl }) {
  return (
    <div className="content-img__img-container">
      <img alt="Switch Juice" className="img-container__img" src={imageUrl} />
    </div>
  );
}
ImageGroup.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
export default ImageGroup;
