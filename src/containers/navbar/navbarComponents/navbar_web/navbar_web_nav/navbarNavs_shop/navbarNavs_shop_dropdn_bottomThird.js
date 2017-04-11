import React, { PureComponent, PropTypes } from 'react';
import { browserHistory } from 'react-router';

/* TODO
1. Recommend Another juice buton sends user to "/contact us";

*/

class NavbarNavsShopDropdnBottomthird extends PureComponent {
  static propTypes = {
    toggleNavbarDropdown: PropTypes.func.isRequired,
  }

  toggleNavbarDropdown = () => this.props.toggleNavbarDropdown;

  recommendClick = (location) => {
    this.toggleNavbarDropdown();
    browserHistory.push(location);
  }

  render() {
    return (
      <div className="shop-dropdown-content-bottomThird">
        <span className="shop-dropdown-content-bottomThird-leftSide">
          <button
            id="/contact_us"
            className="shop-dropdown-content-bottomThird-leftSide-recommend sweep-right"
            onClick={e => this.recommendClick(e.target.getAttribute('id'))}
          >
            <span>Recommend Another Juice Line</span>
          </button>
        </span>
        <span className="shop-dropdown-content-bottomThird-rightSide">
          <h4 className="shop-dropdown-content-bottomThird-rightSide-promoSoft">
            <span>Get 10% OFF</span>
          </h4>
          <h4 className="shop-dropdown-content-bottomThird-rightSide-promoHard">
            <span>When You Become A Member</span>
          </h4>
        </span>
      </div>
    );
  }
}

export default NavbarNavsShopDropdnBottomthird;
