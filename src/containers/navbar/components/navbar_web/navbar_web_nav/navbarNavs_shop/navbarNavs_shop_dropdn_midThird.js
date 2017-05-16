import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import NavbarNavsShopDropdnJuiceCards from './navbarNavs_shop_dropdn_midThird_juiceCard';

const { arrayOf, object, func } = PropTypes;

class NavbarNavsShopDropdnMidthird extends PureComponent {
  static propTypes = {
    popularProducts: arrayOf(object).isRequired,
    push: func.isRequired,
  }

  push = (e) => {
    let location = e.target.dataset.tag;
    if (!location) {
      location = e.target.parentNode.dataset.tag;
    }
    this.props.push(`/juice/${location}`);
  };

  render() {
    const { popularProducts } = this.props;
    return (
      <div className="shop-dropdown-content-midThird">
        <div className="shop-dropdown-content-midThird-title">
          <h2>
            <i>Switch Juice</i>
          </h2>
        </div>
        <div className="shop-dropdown-content-midThird-juices">
          { popularProducts.map(juiceObj => (
            <NavbarNavsShopDropdnJuiceCards
              key={juiceObj.title || Math.round(Math.random() * -1000)}
              juiceInfo={juiceObj}
              tag={juiceObj.routeTag}
              push={this.push}
            />))
          }
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  push: location => dispatch(push(location)),
});
export default connect(null, mapDispatchToProps)(NavbarNavsShopDropdnMidthird);
