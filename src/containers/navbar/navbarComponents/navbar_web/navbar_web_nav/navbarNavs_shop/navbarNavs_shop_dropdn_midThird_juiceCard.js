import React from 'react';
// import { Link } from 'react-router';

/* TODO
This component will receive 6 popular juice products.

1. Each of these Juice Cards are links to that specific product.
Therefore it's necessary to save the url suffix with the item info in order to dynamically assign it to a react-router Link component.

2. "Recommend Another Juice Line" needs to send the user to the "/contact_us" page.

*/
const { shape, arrayOf, string, func } = React.PropTypes;
const propTypes = {
  juiceInfo: shape({
    title: string,
    price: string,
    nicotine_strengths: arrayOf(string),
    imageUrl: string,
  }).isRequired,
  tag: string.isRequired,
  push: func.isRequired,
  // toggleNavbarDropdown: PropTypes.func.isRequired,
};

function NavbarNavsShopDropdnJuiceCards(props) {
  // const toggleNavbarDropdown = e => props.toggleNavbarDropdown(e);
  const { juiceInfo, tag, push } = props;

  return (
    <div className="midThird__juices-card" >
      <button data-tag={tag} className="juices-card__title" onClick={push}>
        <h4>{juiceInfo.title}</h4>
      </button>
      <button data-tag={tag} className="juices-card__image" onClick={push}>
        <img
          className="image__src"
          src={juiceInfo.imageUrl}
          alt={`${juiceInfo.title} juice`}
        />
      </button>
    </div>
  );
}
NavbarNavsShopDropdnJuiceCards.propTypes = propTypes;
export default NavbarNavsShopDropdnJuiceCards;
