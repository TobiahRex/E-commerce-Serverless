import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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

const {
  any,
  bool,
  func,
  shape,
  string,
  number,
  arrayOf,
  objectOf,
} = PropTypes;

class SingleProductContainer extends PureComponent {
  static propTypes = {
    qty: number.isRequired,
    qtyHandler: func.isRequired,
    nicStrength: number.isRequired,
    nicotineHandler: func.isRequired,
    addToCartHandler: func.isRequired,
    fbLike: func.isRequired,
    loggedIn: bool.isRequired,
    modalHandler: func.isRequired,
    productObj: objectOf(any).isRequired,
    juiceObj: shape({
      id: string,
      title: string,
      nicotine_strengths: arrayOf(string),
      imageUrl: string,
      routeTag: string,
    }).isRequired,
    addToMemberCart: func.isRequired,
    addToGuestCart: func.isRequired,
    error: bool,
  }
  static defaultProps = {
    error: false,
  }
  render() {
    const {
      qty,
      fbLike,
      loggedIn,
      productObj,
      qtyHandler,
      nicStrength,
      modalHandler,
      nicotineHandler,
      addToCartHandler,
      error,
    } = this.props;
    const {
      description,
      price,
      sku,
      id,
      title,
      images,
    } = productObj;
    return (
      <div className="main__parent">
        <ImageGroup
          modalHandler={modalHandler}
          imageUrl={images
            .reduce((accumObj, nextObj) => (
              Object.prototype.hasOwnProperty.call(accumObj, 'large') ? accumObj.large : nextObj.large))
          }
        />

        <div className="main__info--desc">
          <JuiceTitle
            title={title}
          />
          <PriceInfo
            price={price}
            id={id}
            sku={sku}
          />
          <ProductBlurb
            description={description}
          />

          <NewMemberPromotionBtn
            modalHandler={modalHandler}
            loggedIn={loggedIn}
          />

          <NicotineBtns
            nicStrength={nicStrength}
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
            fbLike={fbLike}
            location={`${process.env.BASE_URL}/juice/${title}?id=${id}`}
          />
        </div>
      </div>
    );
  }
}
export default SingleProductContainer;
