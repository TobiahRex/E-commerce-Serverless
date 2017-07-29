import React from 'react';
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

import {
  arrayDeepEquality as ArrayDeepEquality,
} from '../../container/utilities.imports';

class ProductDisplay extends React.Component {
  static propTypes = propTypes
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);

    this.state = {
      productsArray: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('%cnextProps @ ProductDisplay', 'background:lime;', nextProps);
    if (!ArrayDeepEquality(nextProps.productsArray, this.props.productsArray)) {
      this.setState(prevState => ({
        ...prevState,
        productsArray: [...nextProps.productsArray],
      }));
    }
  }

  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  }

  filterImages = (images) => {
    const helper = ({ purpose }) => purpose === 'large';
    const image = !!images.filter(helper).length;
    return image ? images.filter(helper).reduce((a, n) => n.url, '') : '';
  }

  composeSingleProduct = arrayOfProducts => arrayOfProducts
    .reduce((accum, { _id, product }, i) => {
      if (i === 0) {
        accum = {
          nicotineStrengths: [{
            _id,
            nicotineStrength: product.nicotineStrength,
          }],
          product: {
            sku: product.sku,
            price: product.price,
            blurb: product.blurb,
            title: product.title,
            images: product.images,
            productId: _id,
            quantities: product.quantities,
            nicotineStrength: product.nicotineStrength,
          },
        };
        return accum;
      }
      accum.nicotineStrengths.push({
        _id,
        nicotineStrength: product.nicotineStrength,
      });
      return accum;
    }, {});

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
      nicotineStrengths,
      product: {
        blurb,
        price,
        sku,
        title,
        images,
        productId,
        quantities: { available },
      },
    } = this.composeSingleProduct(productsArray);

    return (
      <div className="main__parent">
        <ImageGroup
          imageUrl={this.filterImages(images)}
          modalHandler={modalHandler}
        />
        <div className="main__info--desc">
          <JuiceTitle title={title} />

          <PriceInfo
            id={productId}
            sku={sku}
            price={price}
            inStock={!!available}
          />

          <ProductBlurb description={blurb} />

          <NewMemberPromotionBtn
            loggedIn={loggedIn}
            modalHandler={modalHandler}
          />

          <NicotineBtns
            chosenStrength={chosenStrength}
            nicotineHandler={nicotineHandler}
            nicotineStrengths={nicotineStrengths}
          />

          <ProductActions
            inStock={!!available}
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
