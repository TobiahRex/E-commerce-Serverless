import React, { PureComponent, PropTypes } from 'react';
import NavbarNavsShopDropdnJuiceCards from './navbarNavs_shop_dropdn_midThird_juiceCard';

class NavbarNavsShopDropdnMidthird extends PureComponent {
  static propTypes = {
    popJuices: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleNavbarDropdown: PropTypes.func.isRequired,
  }

  renderJuiceCards = () => this.props.popJuices.map(juiceObj => (
    <NavbarNavsShopDropdnJuiceCards
      key={juiceObj.title}
      juiceInfo={juiceObj}
      toggleNavbarDropdown={this.props.toggleNavbarDropdown}
    />))

  render() {
    return (
      <div className="shop-dropdown-content-midThird">
        <div className="shop-dropdown-content-midThird-title">
          <h2>
            <i>Switch Juice</i>
          </h2>
        </div>
        <div className="shop-dropdown-content-midThird-juices">
          {/* BUG - renderJuicesCards is a new function on each render. */}
          {this.renderJuiceCards()}
        </div>
      </div>
    );
  }
}
export default NavbarNavsShopDropdnMidthird;
