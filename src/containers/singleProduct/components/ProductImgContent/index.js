import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  ImgGrp,
  ImgBanner,
} from '../';

import {
  arrayDeepEquality as ArrayDeepEquality,
} from '../../assets/utils';

class ProductImgContent extends React.Component {
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
      modalHandler,
      productsArray,
    } = this.props;

    const {
      product: {
        images,
      },
    } = this.composeSingleProduct(productsArray);

    return (
      <div className="product-content__content-img" data-ix="product-page-img-scroll">
        <ImgBanner modalHandler={modalHandler} />
        <ImgGrp imageUrl={this.filterImages(images)} />
        <div className="content-img__fade-gradient" />
      </div>
    );
  }
}
const { arrayOf, shape, func, string, number } = PropTypes;

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

ProductImgContent.propTypes = {
  modalHandler: func.isRequired,
  productsArray: arrayOf(ProductShape).isRequired,
};

export default ProductImgContent;
