import React, { PropTypes, PureComponent } from 'react';
import { Link } from 'react-router';

/* TODO
This component will receive 6 popular juice products.

1. Each of these Juice Cards are links to that specific product.
Therefore it's necessary to save the url suffix with the item info in order to dynamically assign it to a react-router Link component.

2. "Recommend Another Juice Line" needs to send the user to the "/contact_us" page.

*/

class NavbarNavsShopDropdnJuiceCards extends PureComponent {
  static propTypes = {
    juiceInfo: PropTypes.objectOf(PropTypes.any).isRequired,
    toggleNavbarDropdown: PropTypes.func.isRequired,
  }

  toggleNavbarDropdown = () => this.props.toggleNavbarDropdown;

  render() {
    const { title, imageSrc, urlSuffix } = this.props.juiceInfo;
    return (
      <Link
        onClick={() => this.toggleNavbarDropdown()}
        to={`/juice/${urlSuffix}`}
        className="shop-dropdown-content-midThird-juices-card"
      >
        <div className="shop-dropdown-content-midThird-juices-card-title">
          <h4>{title}</h4>
        </div>
        <div className="shop-dropdown-content-midThird-juices-card-image">
          <img
            className="shop-dropdown-content-midThird-juices-card-image-src"
            src={imageSrc}
            alt={`${title} juice`}
          />
        </div>
      </Link>
    );
  }
}

export default NavbarNavsShopDropdnJuiceCards;
