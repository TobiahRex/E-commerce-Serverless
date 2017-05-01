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

class SingleProductContainer extends Component {
  static propTypes = {
    qty: number.isRequired,
    qtyHandler: func.isRequired,
    nicStrength: number.isRequired,
    nicotineHandler: func.isRequired,
    addToCartHandler: func.isRequired,
    // fbLike: func.isRequired,
    loggedIn: bool.isRequired,
    modalHandler: func.isRequired,
    productObj: objectOf(any).isRequired,
    error: bool,
  };
  static defaultProps = {
    error: false,
  };

  shouldComponentUpdate(nextProps) {
    if (!_.isEqual(nextProps, this.props)) return true;
    return false;
  }

  qtyHandler = e => this.props.qtyHandler(e);
  addToCartHandler = e => this.props.addToCartHandler(e);
  modalHandler = e => this.props.modalHandler(e);
  nicotineHandler = e => this.props.nicotineHandler(e);

  render() {
    const {
      qty,
      // fbLike,
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
          imageUrl={
            images.reduce((accumObj, nextObj) => {
              if (Object.prototype.hasOwnProperty.call(accumObj, 'large')) {
                return accumObj.large;
              }
              return nextObj.large;
            })
          }
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
export default SingleProductContainer;
