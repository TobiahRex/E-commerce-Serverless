import React, { PropTypes, PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

class NavbarNavsMediaDropdnBottomthird extends PureComponent {
  render() {
    return (
      <div className="media-dropdown-content-bottomThird">
        <div className="media-dropdown-content-bottomThird-outterContainer">
          <div className="media-dropdown-content-bottomThird-innerContainer">
            <div className="media-dropdown-content-bottomThird-innerContainer-smedia">
              <FontAwesome
                name="facebook"
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
