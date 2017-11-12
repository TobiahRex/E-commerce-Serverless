import React from 'react';
import PropTypes from 'prop-types';

function MyCartProductImage({ imageUrl, title }) {
  return (
    <div className="product-list-card__img-container">
      <img
        src={imageUrl}
        alt={`${title} juice`}
        className="img-container__cart-card-img"
      />
    </div>
  );
}
const { string } = PropTypes;
MyCartProductImage.propTypes = {
  imageUrl: string.isRequired,
  title: string.isRequired,
};
export default MyCartProductImage;
