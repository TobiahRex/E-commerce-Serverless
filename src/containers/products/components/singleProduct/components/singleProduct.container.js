import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { SINGLE_PRODUCT_BY_ID } from './graphql/queries';
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
  filterImages = (images) => {
    const helper = ({ purpose }) => purpose === 'large';
    const image = images.filter(helper).length;
    return !image ? '' : images.filter(helper).reduce(a => a).url;
  }

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
const mapStateToProps = ({ routing }) => ({
  _id: routing.locationBeforeTransitions.query,
});

const SingleProductWithState = connect(mapStateToProps, null)(SingleProductContainer);


export default graphql(SINGLE_PRODUCT_BY_ID, {
  options: (props) => {
    console.log('%cprops', 'background:red;', props);
    return ({
      variables: {
        _id: props._id,
      },
    }),
  },
  props: ({ ownProps, data }) => {
    console.log('%cdata', 'background:red;', data);
    console.log('%cownProps', 'background:red;', ownProps);

    return ({
      qtyHandler: e => ownProps.qtyHandler(e),
      addToCartHandler: e => ownProps.addToCartHandler(e),
      modalHandler: e => ownProps.modalHandler(e),
      nicotineHandler: e => ownProps.nicotineHandler(e),
    });
  },
})(SingleProductWithState);
