import React from 'react';

const { func } = React.PropTypes;

function ImageGroup({ toggleModal }) {
  return (
    <div className="main__info--image">
      <img className="image__src" alt="Switch Juice" />
      <button
        data-set="parent-bulk"
        className="image__promotion sweep-right-red"
        onClick={toggleModal}
      >
        <p>Buy 4 Bottles</p>
        <br />
        <p>Get 25% Off Your Order</p>
      </button>
    </div>
  );
}
ImageGroup.propTypes = {
  toggleModal: func.isRequired,
};
export default ImageGroup;
