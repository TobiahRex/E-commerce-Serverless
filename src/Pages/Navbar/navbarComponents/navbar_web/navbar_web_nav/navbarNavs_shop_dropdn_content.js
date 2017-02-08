import React, { PureComponent } from 'react';

class NavbarNavsShopDropdnContent extends PureComponent {
  render() {
    return (
      <span className="shop-dropdown-content">
        <span className="shop-dropdown-content-parent">
          <div className="shop-dropdown-content-topThird">
            <div className="shop-dropdown-content-topThird-parent">
              <div className="shop-dropdown-content-topThird-parent-title"></div>
              <div className="shop-dropdown-content-topThird-parent-desc"></div>
            </div>
            <div className="shop-dropdown-content-topThird-video">Video</div>
          </div>
          <div className="shop-dropdown-content-midThird">
            <div className="shop-dropdown-content-midThird-title">
              <h1>Switch Juice</h1>
            </div>
            <div className="shop-dropdown-content-midThird-juices">
              
            </div>
          </div>
          <div className="shop-dropdown-content-bottomThird"></div>
        </span>
      </span>
    );
  }
}

export default NavbarNavsShopDropdnContent;
