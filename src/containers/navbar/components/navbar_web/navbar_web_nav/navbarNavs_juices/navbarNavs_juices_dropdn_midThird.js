import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import NavbarNavsJuicesDropdnJuiceCards from './navbarNavs_juices_dropdn_midThird_juiceCard';

const { arrayOf, object, func } = PropTypes;

class NavbarNavsJuicesDropdnMidthird extends Component {
  static propTypes = {
    popularProducts: arrayOf(object).isRequired,
    push: func.isRequired,
  }

  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
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
          { popularProducts.map(productObj => (
            <NavbarNavsJuicesDropdnJuiceCards
              key={productObj._id || Math.round(Math.random() * -1000)}
              tag={productObj.product.routeTag}
              push={this.push}
              productInfo={productObj}
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
export default connect(null, mapDispatchToProps)(NavbarNavsJuicesDropdnMidthird);
