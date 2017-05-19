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

const { any, bool, func, string, number, objectOf } = PropTypes;

class ProductDisplay extends Component {
  static propTypes = {
    qty: number.isRequired,
    // fbLike: func.isRequired,
    error: bool,
    loggedIn: bool.isRequired,
    productId: string,
    productObj: objectOf(any),
    qtyHandler: func.isRequired,
    nicStrength: number.isRequired,
    modalHandler: func.isRequired,
    nicotineHandler: func.isRequired,
    addToCartHandler: func.isRequired,
  };
  static defaultProps = {
    error: false,
    productId: '',
    productObj: null,
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
      error,
      loggedIn,
      productId,
      productObj,
      qtyHandler,
      nicStrength,
      modalHandler,
      nicotineHandler,
      addToCartHandler,
    } = this.props;
    const {
      blurb,
      price,
      sku,
      title,
      images,
      quantities: available,
      nicotine_strengths: nicotineStrengths,
    } = productObj;
    return (
      <div className="main__parent">
        <ImageGroup
          modalHandler={modalHandler}
          imageUrl={this.filterImages(images)}
        />
        <div className="main__info--desc">
          <JuiceTitle title={title} />
          <PriceInfo
            price={price}
            id={productId}
            sku={sku}
            inStock={available ? 1 : 0}
          />
          <ProductBlurb description={blurb} />

          <NewMemberPromotionBtn
            modalHandler={modalHandler}
            loggedIn={loggedIn}
          />

          <NicotineBtns
            nicStrength={nicStrength}
            nicotineStrengths={nicotineStrengths}
            nicotineHandler={nicotineHandler}
          />

          <ProductActions
            quantity={qty}
            nicStrength={nicStrength}
            error={error}
            addToCartHandler={addToCartHandler}
            qtyHandler={qtyHandler}
          />

          <SocialMediaBtns
            // fbLike={fbLike}
            location={`${process.env.BASE_URL}/juice/${title}?id=${productId}`}
          />
        </div>
      </div>
    );
  }
}
export default ProductDisplay;
