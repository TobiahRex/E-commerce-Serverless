import React from 'react';
import PropTypes from 'prop-types';

function ImageGroup({ modalHandler, imageUrl }) {
  return (
    <div className="main__info--image">
      <img
        src={imageUrl}
        className="image__src"
        alt="Switch Juice"
      />
      <button
        data-parent="promotion-bulk"
        data-tag=""
        className="image__promotion sweep-right-red"
        onClick={modalHandler}
      >
        <p>Buy 4 Bottles</p>
        <br />
        <p>Get 25% Off Your Order</p>
      </button>
    </div>
  );
}
const { string, func } = PropTypes;
ImageGroup.propTypes = {
  modalHandler: func.isRequired,
  imageUrl: string.isRequired,
};
export default ImageGroup;
