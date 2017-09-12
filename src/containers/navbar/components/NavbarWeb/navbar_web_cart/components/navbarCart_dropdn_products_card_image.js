import React from 'react';
import PropTypes from 'prop-types';

function NavbarCartProductsCardImage({ imageUrl, title }) {
  return (
    <div className="products-list-card-image">
      <img
        className="products-list-card-image-src"
        src={imageUrl}
        alt={`${title} juice`}
      />
    </div>
  );
}
const { string } = PropTypes;
NavbarCartProductsCardImage.propTypes = {
  imageUrl: string.isRequired,
  title: string.isRequired,
};
export default NavbarCartProductsCardImage;
