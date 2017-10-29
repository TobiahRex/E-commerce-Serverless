import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { goBack } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { connect } from 'react-redux';

function EmptyCart({ routerBack }) {
  return (
    <div className="empty-cart-main">
      <div className="empty-cart-main-title">
        <h2>
          <IntlMsg id="cart.empty.header" />
        </h2>
      </div>
      <div className="empty-cart-main-icon">
        <FontAwesome name="shopping-basket" size="5x" />
      </div>
      <div className="empty-cart-oops-msg" />
      <div className="empty-cart-shopping-btn">
        <button
          className="sweep-right"
          onClick={routerBack}
          // onClick={() => browserHistory.push(`/juice/${juices[Math.floor(Math.random() * (juices.length - 1))]}`)}
        >
          <IntlMsg id="cart.empty.action-btn" />
        </button>
      </div>
    </div>
  );
}
const EmptyCartWithState = connect(null, (dispatch) => ({
  routerBack: () => dispatch(goBack()),
}))(EmptyCart);

EmptyCart.propTypes = {
  routerBack: PropTypes.func.isRequired,
};
export default EmptyCartWithState;
