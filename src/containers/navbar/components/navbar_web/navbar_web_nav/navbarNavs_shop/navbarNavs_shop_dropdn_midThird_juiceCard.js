import React from 'react';

function NavbarNavsShopDropdnJuiceCards(props) {
  const {
    tag,
    push,
    juiceInfo: { _id, product },
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
        data-tag={`${tag}?id=${_id}`}
        className="juices-card__title"
        onClick={push}
      >
        <h4>{product.title}</h4>
      </button>

      <button
        data-tag={`${tag}?id=${_id}`}
        className="juices-card__image"
        onClick={push}
      >
        <img
          className="image__src"
          src={imageUrl}
          alt={`${product.title} juice`}
        />

      </button>
    </div>
  );
}
const { shape, arrayOf, string, func } = React.PropTypes;
NavbarNavsShopDropdnJuiceCards.propTypes = {
  juiceInfo: shape({
    title: string,
    price: string,
    nicotine_strengths: arrayOf(string),
    imageUrl: string,
  }),
  tag: string,
  push: func.isRequired,
};
NavbarNavsShopDropdnJuiceCards.defaultProps = {
  juiceInfo: {
    title: '',
    price: '',
    nicotine_strengths: [''],
    imageUrl: '',
  },
  tag: '',
};
export default NavbarNavsShopDropdnJuiceCards;
