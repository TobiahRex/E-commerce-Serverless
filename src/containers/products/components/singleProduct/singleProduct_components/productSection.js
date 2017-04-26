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

const { func, bool } = PropTypes;

class ProductSection extends Component {
  static propTypes = {
    modalHandler: func.isRequired,
    loggedIn: bool.isRequired,
    addToMemberCart: func.isRequired,
    addToGuestCart: func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      productId: '',
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
      productId: id,
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
    if (nicEl) {
      nicEl = e.target.parentNode.dataset.tag;
    }
    this.setState({ nicStrength: nicEl });
  }

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
          nicStrengthHandler={this.nicStrengthHandler}
        />
        <ProductActions
          quantity={this.state.qty}
          nicStrength={this.state.nicStrength}
          error={this.state.error}
          addToCartHandler={this.addToCartHandler}
          qtyHandler={this.qtyHandler}
        />
        <SocialMediaBtns />
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  loggedIn: auth.loggedIn,
});
const mapDispatchToProps = dispatch => ({
  addToGuestCart: productObj => dispatch(orderActions.addToGuestCart(productObj)),
  addToMemberCart: productObj => dispatch(orderActions.addToMemberCart(productObj)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductSection);
