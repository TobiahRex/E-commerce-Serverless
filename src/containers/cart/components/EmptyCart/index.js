import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { goBack } from 'react-router-redux';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { connect } from 'react-redux';
import { lifecycle } from 'recompose';
import { WebflowAnimations } from './assets/utils';
import './assets/styles/style.css';

function EmptyCart({ routerBack }) {
  return (
    <div className="empty-cart">
      <div className="empty-cart__hdr-container">
        <h1 className="hdr-container__hdr-text" data-ix="empty-cart-slide-from-above">
          <IntlMsg id="cart.empty.header" />
        </h1>
      </div>
      <div className="empty-cart__fa-cart-container">
        <div className="fa-cart-container__fa-text" data-ix="empty-cart-animation">
          <FontAwesome name="shopping-basket" />
        </div>
      </div>
      <div className="empty-cart__sub-hdr-container">
        <h3 className="empty-cart__subheader" data-ix="empty-cart-animation">
          <IntlMsg id="cart.empty.subheader" />
        </h3>
      </div>
      <div className="empty-cart__blurb-container">
        <p className="blurb-container__blurb-content" data-ix="empty-cart-animation">
          <IntlMsg id="cart.empty.message" />
        </p>
      </div>
      <div className="empty-cart__lg-button">
        <div className="lg-button__container" data-ix="empty-cart-animation">
          <button
            className="container__lg-button w-inline-block sweep-right"
            type="button"
            onClick={routerBack}
          >
            <div className="lg-button__text">
              <strong className="text__fa-text">
                <FontAwesome name="angle-double-left" />&nbsp;
              </strong>
              <IntlMsg id="cart.empty.action-btn" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
const EmptyCartWithState = connect(null, dispatch => ({
  routerBack: () => dispatch(goBack()),
}))(EmptyCart);
const EmptyCartWithStateAndLifecycle = lifecycle({
  componentDidMount: () => {
    console.log('hello?');
    WebflowAnimations();
  },
})(EmptyCartWithState);

EmptyCart.propTypes = {
  routerBack: PropTypes.func.isRequired,
};
export default EmptyCartWithStateAndLifecycle;
