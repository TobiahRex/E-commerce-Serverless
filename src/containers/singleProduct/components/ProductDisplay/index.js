import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  ImgGrp,
  ProductText,
  ProductTextTitle,
  // ProductTitle,
  // PriceInfo,
  // ProductBlurb,
  ProductTextInfo,
  ProductTextBlurb,
  ProductActions,
  NewMemberPromotionBtn,
  NicotineBtns,
} from '../';

import {
  arrayDeepEquality as ArrayDeepEquality,
} from '../../assets/utils';

class ProductDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsArray: [],
    };
  }

  componentWillReceiveProps(nextProps) {
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
        <ImgGrp
          imageUrl={this.filterImages(images)}
          modalHandler={modalHandler}
        />
        <div className="main__info--desc">

          <ProductText>

            <ProductTextTitle title={title} />

            <ProductTextInfo
              id={productId}
              sku={sku}
              price={price}
              inStock={!!available}
            />

            <ProductTextBlurb description={blurb} />

          </ProductText>

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

          {/* TODO: MVP 2
            <SocialMediaBtns
            // fbLike={fbLike}
            location={`${process.env.BASE_URL}/juice/${title}?id=${productId}`}
          /> */}
        </div>
      </div>
    );
  }
}
const { arrayOf, shape, bool, func, string, number } = PropTypes;

const ProductShape = shape({
  _id: string,
  product: shape({
    qty: number,
    price: string,
    mainTitle: shape({
      en: string,
      ja: string,
    }).isRequired,
    title: shape({
      en: string,
      ja: string,
    }).isRequired,
    slug: string,
    strength: number,
    nicotineStrength: string,
    images: arrayOf(shape({
      purpose: string,
      url: string,
    })),
    quantities: shape({
      available: number,
      inCarts: number,
      purchased: number,
    }),
  }),
});

ProductDisplay.propTypes = {
  qty: number.isRequired,
  // fbLike: func.isRequired,
  added: bool,
  error: bool,
  errorMsg: string,
  loggedIn: bool.isRequired,
  qtyHandler: func.isRequired,
  modalHandler: func.isRequired,
  productsArray: arrayOf(ProductShape).isRequired,
  chosenStrength: number.isRequired,
  nicotineHandler: func.isRequired,
  addToCartHandler: func.isRequired,
};
ProductDisplay.defaultProps = {
  added: false,
  error: false,
  errorMsg: '',
};

export default ProductDisplay;
