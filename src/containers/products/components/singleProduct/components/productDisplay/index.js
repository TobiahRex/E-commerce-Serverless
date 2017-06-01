import React, { Component } from 'react';
import _ from 'lodash';
import { propTypes, defaultProps } from './propTypes';
import {
  ImageGroup,
  JuiceTitle,
  PriceInfo,
  ProductBlurb,
  ProductActions,
  NewMemberPromotionBtn,
  NicotineBtns,
  SocialMediaBtns,
} from '../../container/component.imports';

class ProductDisplay extends Component {
  static propTypes = propTypes
  static defaultProps = defaultProps;

  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  }
  filterImages = (images) => {
    const helper = ({ purpose }) => purpose === 'large';
    const image = images.filter(helper).length;
    return !image ? '' : images.filter(helper).reduce(a => a).url;
  }

  composeCommonProduct = (arrayOfProducts) => {
    // TODO create a common product from an array of products.
  }

  render() {
    const {
      // fbLike,
      qty,
      added,
      error,
      errorMsg,
      loggedIn,
      qtyHandler,
      modalHandler,
      productsArray,
      chosenStrength,
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
      nicotineStrength,
    } = this.composeCommonProduct(productsArray);
    return (
      <div className="main__parent">
        <ImageGroup
          modalHandler={modalHandler}
          imageUrl={this.filterImages(images)}
        />
        <div className="main__info--desc">
          <JuiceTitle title={title} />

          <PriceInfo
            sku={sku}
            price={price}
            id={productId}
            inStock={available ? 1 : 0}
          />

          <ProductBlurb description={blurb} />

          <NewMemberPromotionBtn
            loggedIn={loggedIn}
            modalHandler={modalHandler}
          />

          <NicotineBtns
            chosenStrength={chosenStrength}
            nicotineHandler={nicotineHandler}
            nicotineStrength={nicotineStrength}
          />

          <ProductActions
            added={added}
            error={error}
            quantity={qty}
            errorMsg={errorMsg}
            qtyHandler={qtyHandler}
            chosenStrength={chosenStrength}
            addToCartHandler={addToCartHandler}
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
