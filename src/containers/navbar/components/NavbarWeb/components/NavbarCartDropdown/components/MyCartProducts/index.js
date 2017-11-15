import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  MyCartEmpty,
  MyCartLoading,
  MyCartProductImage,
  MyCartProductInfo,
  MyCartProductActions,
  MyCartProductCard,
} from './components';

const { bool, func, object, arrayOf } = PropTypes;

class MyCartProducts extends Component {
  static propTypes = {
    loading: bool.isRequired,
    cartItems: arrayOf(object),
    editCartItem: func.isRequired,
    deleteFromCart: func.isRequired,
  };
  static defaultProps = {
    cartItems: [],
  }

  shouldComponentUpdate(nextProps) {
    const isArrayEqual = (np, tp) => _(np).differenceWith(tp, _.isEqual).isEmpty(),

      productsDiff = isArrayEqual(nextProps.cartItems, this.props.cartItems);

    if (!_.isEqual(nextProps, this.props) || productsDiff) return true;
    return false;
  }

  filterImages = (images) => {
    if (!images.length) return '';

    const helper = ({ purpose }) => purpose === 'card';
    const image = images.filter(helper).length;
    return !image ? '' : images.filter(helper).reduce(a => a).url;
  }

  renderListContent = ({ cartItems, loading }) => {
    if (loading) return (<MyCartLoading />);

    if (!cartItems.length && !loading) return (<MyCartEmpty />);

    return this.renderCartItems(cartItems);
  }

  renderCartItems = productItems =>
    productItems.map((productObj) => {
      const {
        _id,
        qty,
        product: {
          title,
          price,
          images,
          nicotineStrength,
          slug,
        },
      } = productObj;

      return (
        <MyCartProductCard id={_id}>
          <MyCartProductImage
            imageUrl={this.filterImages(images)}
            title={title[IntlLocale]}
          />

          <MyCartProductInfo
            qty={qty}
            title={title[IntlLocale]}
            price={price}
            nicotineStrength={nicotineStrength}
          />

          <MyCartProductActions
            productId={_id}
            slug={slug}
            editCartItem={this.props.editCartItem}
            deleteFromCart={this.props.deleteFromCart}
          />
        </MyCartProductCard>
      );
    },
  );

  render() {
    return (
      <div className="floating-cart-container__product-stage">
        {this.renderListContent(this.props)}
      </div>
    );
  }
}
export default MyCartProducts;
