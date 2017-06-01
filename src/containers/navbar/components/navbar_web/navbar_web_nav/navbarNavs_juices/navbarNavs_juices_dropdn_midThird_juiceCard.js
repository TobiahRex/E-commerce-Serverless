import React from 'react';
import PropTypes from 'prop-types';

function NavbarNavsJuicesDropdnJuiceCards(props) {
  const {
    push,
    product,
    routeTag,
  } = props;
  const imageUrl = product.images.reduce((accumObj, nextObj) => {
    switch (accumObj.purpose) {
      case '': return '';
      case 'card': return accumObj.url;
      default: return nextObj.url;
    }
  });

  return (
    <div className="midThird__juices-card">
      <button
        data-routetag={routeTag}
        className="juices-card__title"
        onClick={push}
      >
        <h4>{product.title}</h4>
      </button>

      <button
        data-routetag={routeTag}
        className="juices-card__image"
        onClick={push}
      >
        <img
          className="image__src"
          src={imageUrl}
          alt={`${product.title} Juice`}
        />

      </button>
    </div>
  );
}
const { arrayOf, shape, string, func } = PropTypes;
NavbarNavsJuicesDropdnJuiceCards.propTypes = {
  product: shape({
    title: string,
    price: string,
    nicotineStrength: string,
    images: arrayOf(
      shape({
        purpose: string,
        url: string,
      }),
    ),
  }),
  routeTag: string,
  push: func.isRequired,
};
NavbarNavsJuicesDropdnJuiceCards.defaultProps = {
  product: {
    title: '',
    price: '',
    nicotineStrength: '',
    images: [{
      purpose: '',
      url: '',
    }],
  },
  routeTag: '',
};
export default NavbarNavsJuicesDropdnJuiceCards;
