import React, { PureComponent } from 'react';
import history from '../../../../../../Services/history';

/* TODO
1. Recommend Another juice buton sends user to "/contact us";

*/

class NavbarNavsShopDropdnBottomthird extends PureComponent {
  render() {
    return (
      <div className="shop-dropdown-content-bottomThird">
        <span className="shop-dropdown-content-bottomThird-leftSide">
          <button
            className="shop-dropdown-content-bottomThird-leftSide-recommend sweep-right"
            onClick={() => history.push('/contact_us')}
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
