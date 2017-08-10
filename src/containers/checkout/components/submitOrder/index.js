import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import FontAwesome from 'react-fontawesome';
import { squarePaymentForm as SqrPaymentForm } from './utilities.imports';

let paymentForm = null;

class SubmitOrder extends React.Component {
  static propTypes = {
    enable: PropTypes.bool.isRequired,
    ccRenderKey: PropTypes.string.isRequired,
    handleNonceResponse: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      ccRenderKey: props.ccRenderKey,
    };
  }

  componentDidMount() {
    console.warn('SUBMIT ORDER - Mounted');
    paymentForm = SqrPaymentForm(this.state.ccRenderKey, this.props.handleNonceResponse);
    paymentForm.build();
  }

  componentWillUnmount() {
    console.warn('SUBMIT ORDER - Will unmount');
    paymentForm.destroy();
  }

  componentWillReceiveProps({ ccRenderKey }) {
    if (ccRenderKey !== this.state.ccRenderKey) {
      this.setState(() => ({ ccRenderKey, }));
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
