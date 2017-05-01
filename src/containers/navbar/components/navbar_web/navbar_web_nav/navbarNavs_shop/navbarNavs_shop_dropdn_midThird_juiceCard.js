import React from 'react';

function NavbarNavsShopDropdnJuiceCards(props) {
  const { juiceInfo, tag, push } = props;
  const imageUrl = juiceInfo.images.reduce((accum, next) => {
    if (Object.prototype.hasOwnProperty.call(accum, 'card')) {
      return accum.card;
    }
    return next.card;
  });

  return (
    <div className="midThird__juices-card">

      <button data-tag={`${tag}?id=${juiceInfo.id}`} className="juices-card__title" onClick={push}>
        <h4>{juiceInfo.title}</h4>
      </button>
      
      <button data-tag={`${tag}?id=${juiceInfo.id}`} className="juices-card__image" onClick={push}>

        <img className="image__src" src={imageUrl} alt={`${juiceInfo.title} juice`} />
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
  }).isRequired,
  tag: string.isRequired,
  push: func.isRequired,
};
export default NavbarNavsShopDropdnJuiceCards;
