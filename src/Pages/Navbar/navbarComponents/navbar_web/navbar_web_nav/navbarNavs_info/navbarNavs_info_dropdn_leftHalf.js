import React, { PureComponent } from 'react';

class NavbarNavsInfoDropdnLefthalf extends PureComponent {
  render() {
    return (
      <div className="info-dropdown-content-innerContainer-left">
        <ul
          className="info-dropdown-content-innerContainer-left-list"
        >
          <li className="sweep-right">
            <p>About</p>
          </li>
          <li className="sweep-right">
            <p>FAQs</p>
          </li>
          <li className="sweep-right">
            <p>Wholesale</p>
          </li>
          <li className="sweep-right">
            <p>Mission Statement</p>
          </li>
          <li className="sweep-right">
            <p>Affiliate Program</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavbarNavsInfoDropdnLefthalf;
