import React, { PropTypes, PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

class NavbarNavsMediaDropdnBottomthird extends PureComponent {
  render() {
    return (
      <div className="media-dropdown-content-bottomThird">
        <div className="media-dropdown-content-bottomThird-outterContainer">
          <div className="media-dropdown-content-bottomThird-innerContainer">
            <div
              id="media-dropdown-facebook-icon"
              className="media-dropdown-content-bottomThird-innerContainer-smedia">
              <FontAwesome
                name="facebook"
                className="media-dropdown-content-bottomThird-innerContainer-smedia-icon"
              />
            </div>
            <div
              id="media-dropdown-twitter-icon"
              className="media-dropdown-content-bottomThird-innerContainer-smedia">
              <FontAwesome
                name="twitter"
                className="media-dropdown-content-bottomThird-innerContainer-smedia-icon"
              />
            </div>
            <div
              id="media-dropdown-youtube-icon"
              className="media-dropdown-content-bottomThird-innerContainer-smedia">
              <FontAwesome
                name="youtube"
                className="media-dropdown-content-bottomThird-innerContainer-smedia-icon"
              />
            </div>
            <div
              id="media-dropdown-linkedin-icon"
              className="media-dropdown-content-bottomThird-innerContainer-smedia">
              <FontAwesome
                name="linkedin"
                className="media-dropdown-content-bottomThird-innerContainer-smedia-icon"
              />
            </div>
            <div
              id="media-dropdown-instagram-icon"
              className="media-dropdown-content-bottomThird-innerContainer-smedia">
              <FontAwesome
                name="instagram"
                className="media-dropdown-content-bottomThird-innerContainer-smedia-icon"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarNavsMediaDropdnBottomthird;
