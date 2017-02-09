import React, { PureComponent } from 'react';

// import NavbarNavsShopDropdnTopthird from './navbarNavs_shop_dropdn_topThird';
// import NavbarNavsShopDropdnMidthird from './navbarNavs_shop_dropdn_midThird';
// import NavbarNavsShopDropdnBottomthird from './navbarNavs_shop_dropdn_bottomThird';

class NavbarNavsInfoDropdnContent extends PureComponent {
  render() {
    return (
      <span className="info-dropdown-content">
        <span className="info-dropdown-content-outterContainer">
          <div className="info-dropdown-content-innerContainer-left">
            <ul>
              <li>
                <p>About</p>
              </li>
              <li>
                <p>FAQs</p>
              </li>
              <li>
                <p>Shipping Information</p>
              </li>
              <li>
                <p>Wholesale</p>
              </li>
              <li>
                <p>Mission Statement</p>
              </li>
              <li>
                <p>Affiliate Program</p>
              </li>
            </ul>
          </div>
          <div className="info-dropdown-content-innerContainer-right"></div>
        </span>
      </span>
    );
  }
}

export default NavbarNavsInfoDropdnContent;
