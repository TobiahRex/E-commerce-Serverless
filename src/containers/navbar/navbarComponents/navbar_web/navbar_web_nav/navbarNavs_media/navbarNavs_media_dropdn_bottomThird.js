import React, { PropTypes, PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

import NavbarNavsMediaDropdnBottomthirdFacebook from './navbarNavs_media_dropdn_bottomThird_facebookIcon';
import NavbarNavsMediaDropdnBottomthirdTwitter from './navbarNavs_media_dropdn_bottomThird_twitterIcon';
import NavbarNavsMediaDropdnBottomthirdYoutube from './navbarNavs_media_dropdn_bottomThird_youtubeIcon';
import NavbarNavsMediaDropdnBottomthirdLinkedin from './navbarNavs_media_dropdn_bottomThird_linkedinIcon';
import NavbarNavsMediaDropdnBottomthirdInstagram from './navbarNavs_media_dropdn_bottomThird_instagramIcon';

class NavbarNavsMediaDropdnBottomthird extends PureComponent {
  render() {
    return (
      <div className="media-dropdown-content-bottomThird">
        <div className="media-dropdown-content-bottomThird-outterContainer">
          <div className="media-dropdown-content-bottomThird-innerContainer">
            <NavbarNavsMediaDropdnBottomthirdFacebook />
            <NavbarNavsMediaDropdnBottomthirdTwitter />
            <NavbarNavsMediaDropdnBottomthirdYoutube />
            <NavbarNavsMediaDropdnBottomthirdLinkedin />
            <NavbarNavsMediaDropdnBottomthirdInstagram />
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarNavsMediaDropdnBottomthird;
