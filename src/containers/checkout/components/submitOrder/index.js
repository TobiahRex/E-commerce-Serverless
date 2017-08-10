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

  componentWillMount() {
    if (!!paymentForm.options) {
      // paymentForm.destroy();
      // paymentForm = {};
    }
  }

  componentDidMount() {
    console.log('%cpaymentForm', 'background:blue;', paymentForm);
    console.log('%cthis.props.ccRenderKey', 'background:pink;', this.props.ccRenderKey);

    SqrPaymentForm(this.props.ccRenderKey, this.props.handleNonceResponse)
    .then((form) => {
      paymentForm = form;
    })
    .catch(alert);
    paymentForm.build();
    console.warn('SUBMIT ORDER - Mounted');
  }

  componentWillReceiveProps({ ccRenderKey }) {
    if (ccRenderKey !== this.state.ccRenderKey) {
      // paymentForm.build();
      this.setState(() => ({ ccRenderKey }));
    }
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
        <button onClick={() => paymentForm.destroy()}>destroy</button>
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
