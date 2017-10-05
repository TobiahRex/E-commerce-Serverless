import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';
import _ from 'lodash';
import { FormattedMessage as IntlMsg } from 'react-intl';
import NavbarNavsJuicesDropdnContent from './navbarNavs_juices_dropdn_content';

const { arrayOf, shape, func, string } = PropTypes;
class NavbarNavsShop extends Component {
  static styles = {
    hide: 'hide',
    show: '',
  }
  static propTypes = {
    popularProducts: arrayOf(
      shape({
        _id: string,
        product: shape({
          title: string,
          images: arrayOf(
            shape({
              purpose: string,
              url: string,
            })),
          slug: string,
        }),
      }),
    ),
    push: func.isRequired,
  }

  static defaultProps = {
    popularProducts: [],
  }
  constructor(props) {
    super(props);

    this.state = {
      dropdownDisplay: false,
    };
  }

  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  }

  toggleNavbarDropdown = (urlSuffix) => {
    this.props.push(`/juice/${urlSuffix}`);
  }

  render() {
    const juices = ['pina_colada', 'french_vanilla_mocha', 'strawberries_n_cream', 'fruity_bamm_bamm', 'papple_berry', 'key_lime_pie'];
    return (
      <div className="navbar-actionSection-lower-shop" >
        <Link
          to="/juice/french_vanilla_mocha"
          // to={`/juice/${juices[Math.floor(Math.random() * (juices.length - 1))]}`}
          className="shop-main-button"
        >
          <div className="shop-main-button-title">
            <IntlMsg id="navbar.nav.juices.title" />
          </div>
        </Link>
        {
          this.props.popularProducts.length ?
            <NavbarNavsJuicesDropdnContent
              popularProducts={this.props.popularProducts}
              toggleNavbarDropdown={this.toggleNavbarDropdown}
            /> : ''
        }
      </div>
    );
  }
}
export default connect(({ products }) => ({
  popularProducts: products.popularProducts,
}), dispatch => ({
  push: location => dispatch(push(location)),
}))(NavbarNavsShop);
