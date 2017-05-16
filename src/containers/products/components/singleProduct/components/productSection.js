/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import orderActions from '../../../../../redux/orders/';
import {
  JuiceTitle,
  PriceInfo,
  ProductBlurb,
  ProductActions,
  NewMemberPromotionBtn,
  NicotineBtns,
  SocialMediaBtns,
} from './imports';

const { func, bool, string, shape, arrayOf } = PropTypes;

class ProductSection extends Component {
  static propTypes = {
    modalHandler: func.isRequired,
    loggedIn: bool.isRequired,
    juiceObj: shape({
      id: string,
      title: string,
      nicotine_strengths: arrayOf(string),
      imageUrl: string,
      routeTag: string,
    }).isRequired,
    addToMemberCart: func.isRequired,
    addToGuestCart: func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      qty: 0,
      nicStrength: 0,
      error: false,
    };
  }

  qtyHandler = (e) => {
    let buttonEl = e.target.dataset.tag;
    if (!buttonEl) {
      buttonEl = e.target.parentNode.dataset.tag;
    }

    if (buttonEl === 'qty-plus') {
      if (this.state.qty <= 3) {
        this.setState(prevState => ({
          ...prevState,
          qty: prevState.qty += 1,
        }));
      } else {
        this.setState(prevState => ({
          ...prevState,
          error: true,
        }));
      }
    } else if (buttonEl === 'qty-minus') {
      const { qty } = this.state;
      if (qty >= 1 && qty <= 4) {
        this.setState(prevState => ({
          ...prevState,
          qty: prevState.qty -= 1,
        }));
      } else {
        this.setState(prevState => ({
          ...prevState,
          error: true,
        }));
      }
    }
  }

  addToCartHandler = () => {
    // 1. If the total items in the cart (redux store) are >= 4, then throw error.
    // 2. If the total items in the cart are <4 than, verify the additional qty, will not exceed 4.  If so, throw an error.
    // 3.  If the items to be added + the total <= 4, then reduce like items, and dispatch.
    const {
      qty,
      nicStrength: strength,
    } = this.state;

    if (this.props.loggedIn) {
      this.props.addToMemberCart({
        qty,
        strength,
        ...this.props.juiceObj,
      });
    } else {
      this.props.addToGuestCart({
        qty,
        strength,
        ...this.props.juiceObj,
      });
    }
  }

  nicotineHandler = (e) => {
    let nicEl = e.target.dataset.tag;
    if (!nicEl) {
      nicEl = e.target.parentNode.dataset.tag;
    }
    this.setState({ nicStrength: Number(nicEl) });
  }

  // TODO: Finish Facebook Like button handler @ singleProduct.js
  // fbLike = () => {
  //   /* eslint-disable no-undef */
  //   window.fbAsyncInit = () => {
  //     FB.init({
  //       appId: '1514020845336446',
  //       xfbml: true,
  //       version: 'v2.9',
  //     });
  //     FB.AppEvents.logPageView();
  //     FB.ui({
  //       method: 'share_open_graph',
  //       action_type: 'og.likes',
  //       action_properties: JSON.stringify({
  //         object: 'http://nj2jp-react.s3-website-ap-northeast-1.amazonaws.com/juice/fruity_bamm_bamm',
  //       }),
  //     }, console.log);
  //   };
  //   /* eslint-enable no-undef */
  // }

  render() {
    return (
      <div className="main__info--desc">
        <JuiceTitle />
        <PriceInfo />
        <ProductBlurb />
        <NewMemberPromotionBtn
          modalHandler={this.props.modalHandler}
          loggedIn={this.props.loggedIn}
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
    );
  }
}
const filterJuices = (routingObj, popularProducts) => {
  const location = routingObj.locationBeforeTransitions.pathname;
  const juiceName = location.split('/')[2];
  return popularProducts.filter(({ routeTag }) => routeTag === juiceName)[0];
};

export default connect(({
  auth,
  routing,
  products: { popularProducts },
}) => ({
  loggedIn: auth.loggedIn,
  juiceObj: filterJuices(routing, popularProducts),
}),
dispatch => ({
  addToGuestCart: productObj => dispatch(
    orderActions.addToGuestCart(productObj),
  ),
  addToMemberCart: productObj => dispatch(
    orderActions.addToMemberCart(productObj),
  ),
}))(ProductSection);
