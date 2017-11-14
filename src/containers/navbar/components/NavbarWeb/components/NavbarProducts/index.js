import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withHandlers } from 'recompose';
import {
  ProductsTop,
  ProductsMid,
  ProductsLow,
} from './components';

function NavbarProducts({ popularProducts, routerPush }) {
  return (
    <div className="navbar-big__juice-dropdown">
      <div className="juice-dropdown__floating-juice-container" data-ix="nav-b-juice-hover">
        <ProductsTop />
        <ProductsMid
          popularProducts={popularProducts}
          routerPush={routerPush}
        />
        <ProductsLow routerPush={routerPush} />
        <div className="floating-juice-container__nav-b-menu-box" />
      </div>
    </div>
  );
}
const { shape, string, arrayOf, func } = PropTypes;
NavbarProducts.propTypes = {
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
  routerPush: func.isRequired,
};
NavbarProducts.defaultProps = {
  popularProducts: [],
};
const NavbarProductsWithProps = connect(({ products }) => ({
  popularProducts: products.popularProducts,
}), dispatch => ({
  push: location => dispatch(push(location)),
}))(NavbarProducts);
const NavbarProductsWithPropsAndHandlers = withHandlers({
  routerPush: (e) => {
    const location = e.target.dataset.slug || e.target.parentNode.dataset.slug || e.target.parentNode.parentNode.dataset.slug;
    this.props.push(location);
  },
})(NavbarProductsWithProps);
export default NavbarProductsWithPropsAndHandlers;
