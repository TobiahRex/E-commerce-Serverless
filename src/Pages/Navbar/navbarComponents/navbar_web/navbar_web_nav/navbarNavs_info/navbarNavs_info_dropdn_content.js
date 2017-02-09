import React, { PureComponent } from 'react';

// import NavbarNavsShopDropdnTopthird from './navbarNavs_shop_dropdn_topThird';
// import NavbarNavsShopDropdnMidthird from './navbarNavs_shop_dropdn_midThird';
// import NavbarNavsShopDropdnBottomthird from './navbarNavs_shop_dropdn_bottomThird';

class NavbarNavsInfoDropdnContent extends PureComponent {
  render() {
    return (
      <span className="info-dropdown-content">
        <span className="info-dropdown-content-parent">
          <div className="info-dropdown-content-innerContainer-left">
            <ul
              className="info-dropdown-content-innerContainer-left-list"
            >
              <li>
                <p>About</p>
              </li>
              <li>
                <p>FAQs</p>
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
          <div className="info-dropdown-content-innerContainer-right">
            <ul
              className="info-dropdown-content-innerContainer-right-list"
            >
              <li>
                <p>Contact Us</p>
              </li>
              <li>
                <p>Shipping & Returns Policy</p>
              </li>
              <li>
                <p>Return Policy</p>
              </li>
              <li>
                <p>Privacy Policy</p>
              </li>
              <li>
                <p>Nicotine Disclaimer</p>
              </li>
              <li>
                <p>Terms & Conditions</p>
              </li>
            </ul>
          </div>
        </span>
      </span>
    );
  }
}

export default NavbarNavsInfoDropdnContent;
