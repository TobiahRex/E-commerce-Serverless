import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  ImageGroup,
  JuiceTitle,
  PriceInfo,
  ProductBlurb,
  ProductActions,
  NewMemberPromotionBtn,
  NicotineBtns,
  SocialMediaBtns,
} from './imports';

const { any, bool, func, number, objectOf } = PropTypes;

class ProductDisplay extends Component {
  static propTypes = {
    qty: number.isRequired,
    // fbLike: func.isRequired,
    qtyHandler: func.isRequired,
    nicStrength: number.isRequired,
    nicotineHandler: func.isRequired,
    addToCartHandler: func.isRequired,
    loggedIn: bool.isRequired,
    modalHandler: func.isRequired,
    productObj: objectOf(any),
    error: bool,
  };
  static defaultProps = {
    productObj: null,
    error: false,
  };

  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  }
  filterImages = (images) => {
    const helper = ({ purpose }) => purpose === 'large';
    const image = images.filter(helper).length;
    return !image ? '' : images.filter(helper).reduce(a => a).url;
  }

  render() {
    const {
      // fbLike,
      qty,
      loggedIn,
      productObj,
      nicStrength,
      error,
    } = this.props;
    const { description, price, sku, id, title, images } = productObj;
    return (
      <div className="main__parent">
        <ImageGroup
          modalHandler={this.modalHandler}
          imageUrl={this.filterImages(images)}
        />
        <div className="main__info--desc">
          <JuiceTitle title={title} />
          <PriceInfo price={price} id={id} sku={sku} />
          <ProductBlurb description={description} />

          <NewMemberPromotionBtn modalHandler={this.modalHandler} loggedIn={loggedIn} />

          <NicotineBtns nicStrength={nicStrength} nicotineHandler={this.nicotineHandler} />

          <ProductActions
            quantity={qty}
            nicStrength={nicStrength}
            error={error}
            addToCartHandler={this.addToCartHandler}
            qtyHandler={this.qtyHandler}
          />

          <SocialMediaBtns
            // fbLike={fbLike}
            location={`${process.env.BASE_URL}/juice/${title}?id=${id}`}
          />
        </div>
      </div>
    );
  }
}
export default ProductDisplay;
