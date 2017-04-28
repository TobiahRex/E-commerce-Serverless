import React from 'react';
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

function SingleProductContainer({
  productObj,
  loggedIn,
  modalHandler,
}) {
  return (
    <div className="main__parent">
      <ImageGroup
        modalHandler={modalHandler}
        imageUrl={
          productObj.images
          .reduce((accumObj, nextObj) => (
            Object.prototype.hasOwnProperty.call(accumObj, 'large') ? accumObj.large : nextObj.large))
        }
      />

      <div className="main__info--desc">
        <JuiceTitle />
        <PriceInfo />
        <ProductBlurb />
        <NewMemberPromotionBtn
          modalHandler={modalHandler}
          loggedIn={loggedIn}
        />
        <NicotineBtns
          nicStrength={this.state.nicStrength}
          nicotineHandler={this.nicotineHandler}
        />
        <ProductActions
          quantity={this.state.qty}
          nicStrength={this.state.nicStrength}
          error={this.state.error}
          addToCartHandler={this.addToCartHandler}
          qtyHandler={this.qtyHandler}
        />
        <SocialMediaBtns
          fbLike={this.fbLike}
          location={`${process.env.BASE_URL}/juice/fruity_bamm_bamm`}
        />
      </div>
    </div>
  );
}
const {
  func,
  bool,
  objectOf,
  any,
  string,
  arrayOf,
  shape,
} = PropTypes;

SingleProductContainer.propTypes = {
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
};
export default SingleProductContainer;
