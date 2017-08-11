import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import FontAwesome from 'react-fontawesome';
import {
  squarePaymentForm as SqrPaymentForm,
} from './utilities.imports';

let paymentForm = {};

class SubmitOrder extends React.Component {
  static propTypes = {
    enable: PropTypes.bool.isRequired,
    ccCountry: PropTypes.string.isRequired,
    ccRenderKey: PropTypes.string.isRequired,
    handleNonceResponse: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      ccCountry: props.ccCountry,
      ccRenderKey: props.ccRenderKey,
    };
  }

  componentDidMount() {
    if (!!paymentForm.options) {
      paymentForm.build();
    } else {
      paymentForm = SqrPaymentForm(this.props.ccRenderKey, this.props.handleNonceResponse);
      paymentForm.build();
    }
  }

  componentWillUnmount() {
    // paymentForm.destroy();
  }

  handleOnSubmit = () => {
    paymentForm.requestCardNonce();
  }

  render() {
    const {
      enable,
      ccRenderKey,
    } = this.props;

    return (
    enable ?
      <div className="checkout__purchase-btn" >
        <button onClick={() => paymentForm.destroy()}>Destroy</button>
        <button onClick={() => {
          paymentForm = SqrPaymentForm(ccRenderKey, this.props.handleNonceResponse);
          paymentForm.build();
        }}>Build</button>
        <Validation.components.Button
          className="button"
          errorClassName="asd"
          onClick={this.handleOnSubmit}
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

export default SubmitOrder;
