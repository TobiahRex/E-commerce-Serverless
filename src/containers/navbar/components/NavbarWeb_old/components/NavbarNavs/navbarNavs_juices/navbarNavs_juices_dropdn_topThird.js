import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

/* TODO
1. This needs the shops promo video embeded in an HTML video element.  Or possibly a VIMEO API call and then inserted into an HTML video element.
*/

function NavbarNavsJuicesDropdnTopthird() {
  return (
    <div className="shop-dropdown-content-topThird">
      <div className="shop-dropdown-content-topThird-parent">
        <div className="shop-dropdown-content-topThird-parent-title">
          <h1>
            <IntlMsg id="navbar.nav.juices.description.title" />
          </h1>
        </div>
        <div className="shop-dropdown-content-topThird-parent-desc">
          <p>
            <IntlMsg id="navbar.nav.juices.description" />
          </p>
        </div>
      </div>
      {/* <div className="shop-dropdown-content-topThird-video">
        <video width="300" height="160" controls>
          <source src="empty.mp4" type="video/mp4" />
          <source src="empty.ogg" type="video/ogg" />
          Your browser does not support HTML5 video.
        </video>
      </div> */}
    </div>
  );
}

export default NavbarNavsJuicesDropdnTopthird;
