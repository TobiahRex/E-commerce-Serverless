import React from 'react';

const { func } = React.PropTypes;

function ImageGroup({ modalHandler }) {
  return (
    <div className="main__info--image">
      <img className="image__src" alt="Switch Juice" />
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
ImageGroup.propTypes = {
  modalHandler: func.isRequired,
};
export default ImageGroup;
