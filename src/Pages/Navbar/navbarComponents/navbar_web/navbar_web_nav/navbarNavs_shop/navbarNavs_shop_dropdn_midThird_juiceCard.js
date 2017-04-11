import React, { PropTypes } from 'react';
import { Link } from 'react-router';

/* TODO
This component will receive 6 popular juice products.

1. Each of these Juice Cards are links to that specific product.
Therefore it's necessary to save the url suffix with the item info in order to dynamically assign it to a react-router Link component.

2. "Recommend Another Juice Line" needs to send the user to the "/contact_us" page.

*/
const propTypes = {
  juiceInfo: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleNavbarDropdown: PropTypes.func.isRequired,
};

function NavbarNavsShopDropdnJuiceCards(props) {
  const toggleNavbarDropdown = e => props.toggleNavbarDropdown(e);
  const { title, imageSrc, urlSuffix } = props.juiceInfo;

  return (
    <div className="shop-dropdown-content-midThird-juices-card" >
      <button
        className="shop-dropdown-content-midThird-juices-card-title"
        onClick={() => toggleNavbarDropdown(urlSuffix)}
      >
        <h4>{title}</h4>
      </button>
      <button
        className="shop-dropdown-content-midThird-juices-card-image"
        onClick={() => toggleNavbarDropdown(urlSuffix)}
      >
        <img
          className="shop-dropdown-content-midThird-juices-card-image-src"
          src={imageSrc}
          alt={`${title} juice`}
        />
      </button>
    </div>
  );
}
NavbarNavsShopDropdnJuiceCards.propTypes = propTypes;
export default NavbarNavsShopDropdnJuiceCards;
