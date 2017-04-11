import React, { PureComponent } from 'react';

/* TODO
1. This needs the shops promo video embeded in an HTML video element.  Or possibly a VIMEO API call and then inserted into an HTML video element.

*/

class NavbarNavsShopDropdnTopthird extends PureComponent {
  render() {
    return (
      <div className="shop-dropdown-content-topThird">
        <div className="shop-dropdown-content-topThird-parent">
          <div className="shop-dropdown-content-topThird-parent-title">
            <h1>Nicotine Juices:</h1>
          </div>
          <div className="shop-dropdown-content-topThird-parent-desc">
            <p>
              N2JP prides itself on offering our customers top quality products and service.  We want your experiences doing business with us to be so good, that we become your #1 choice for all your vape juice needs.  Our customers love us, and we plan on making sure you do to.  You’ll find all our juice offers below.  If you have any questions, don’t hesitate to ask us.  Enjoy your experience “making the switch.”
            </p>
          </div>
        </div>
        <div className="shop-dropdown-content-topThird-video">
          <video width="300" height="160" controls>
            <source src="empty.mp4" type="video/mp4" />
            <source src="empty.ogg" type="video/ogg" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    );
  }
}

export default NavbarNavsShopDropdnTopthird;
