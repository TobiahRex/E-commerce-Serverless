import React, { PureComponent } from 'react';
import { Link } from 'react-router';

class NavbarLower extends PureComponent {
  static styles = {
    hidden: {
      display: 'none',
    },
    show: {},
  }

  render() {
    return (
      <div className="navbar actionSection lower">
        <div className="navbar actionSection lower shop">
          <div className="title">
            <span>SHOP</span>
          </div>
        </div>
        <div className="navbar actionSection lower media">
          <div className="title">
            <span>MEDIA</span>
          </div>
        </div>
        <div className="navbar actionSection lower info">
          <div className="title">
            <span>INFO</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarLower;
