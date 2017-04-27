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
} from './';

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
      juiceId: props.juiceObj.id,
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
    const {
      qty,
      juiceId: id,
      nicStrength: strength,
    } = this.state;

    if (this.props.loggedIn) {
      this.props.addToMemberCart({
        id,
        qty,
        strength,
      });
    } else {
      this.props.addToGuestCart({
        id,
        qty,
        strength,
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
const filterJuices = (location, popJuices) => {
  let juiceName = location.split('/')[2];
  const juice = popJuices
  .filter(({ routeTag }) => routeTag === juiceName)[0];
  console.warn('juiceObj @ filterJuices\n: ', juice);
  return juice;
};

const mapStateToProps = ({ auth, routing, products }) => ({
  loggedIn: auth.loggedIn,
  juiceObj: filterJuices(
    routing.locationBeforeTransitions.pathname, products.popJuices,
  ),
});
const mapDispatchToProps = dispatch => ({
  addToGuestCart: productObj => dispatch(orderActions.addToGuestCart(productObj)),
  addToMemberCart: productObj => dispatch(orderActions.addToMemberCart(productObj)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductSection);
