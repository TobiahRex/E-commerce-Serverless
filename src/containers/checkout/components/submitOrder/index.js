import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import FontAwesome from 'react-fontawesome';

class SubmitOrder extends React.Component {
  static propTypes = {
    ccRenderKey: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);

    this.sqrPaymentForm = SquarePaymentForm(props.ccRenderKey, this.handleOnSubmit);

    this.state = {
      ccRenderKey: '',
    }
  }

  handleOnSubmit = () => {
    this.props.requestCardNonce(SubmitOrder.sqrPaymentForm);
  }

  render() {
    return (
      enable ?
      <div className="checkout__purchase-btn">
        <Validation.components.Button
          className="button"
          errorClassName="asd"
        >
          <span className="btn-flex-parent">
            <FontAwesome name="barcode" />
            {'\u00A0'}
            <p>Place Order Now</p>
          </span>
        </Validation.components.Button>
      </div>
        :
        <div className="checkout__purchase-btn">
          <button className="button" disabled>
            <span className="btn-flex-parent">
              <FontAwesome name="barcode" />
              {'\u00A0'}
              <p>Place Order Now</p>
            </span>
          </button>
        </div>
    );
  }
}
SubmitOrder.propTypes = {
  enable: PropTypes.bool.isRequired,
  submitOrder: PropTypes.func.isRequired,
};
export default SubmitOrder;
