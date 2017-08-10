import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import FontAwesome from 'react-fontawesome';
import { squarePaymentForm as SquarePaymentForm } from './utilities.imports';

class SubmitOrder extends React.Component {
  static propTypes = {
    enable: PropTypes.bool.isRequired,
    ccRenderKey: PropTypes.number.isRequired,
    requestCardNonce: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);

    this.sqrPaymentForm = SquarePaymentForm(props.ccRenderKey, this.handleOnSubmit);

    this.state = {
      ccRenderKey: '',
    };
  }

  componentWillReceiveProps({ ccRenderKey }) {
    if (ccRenderKey !== this.state.ccRenderKey) {
      this.setState(() => ({ ccRenderKey }))
    }
  }

  handleOnSubmit = () => {
    this.props.requestCardNonce(SubmitOrder.sqrPaymentForm);
  }

  render() {
    const {
      enable,
      ccRenderKey,
    } = this.props;

    return (
    enable ?
      <div className="checkout__purchase-btn" key={ccRenderKey}>
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
      <div className="checkout__purchase-btn" key={ccRenderKey}>
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
