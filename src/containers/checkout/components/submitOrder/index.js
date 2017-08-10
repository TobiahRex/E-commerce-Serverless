import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import FontAwesome from 'react-fontawesome';
import { squarePaymentForm as SquarePaymentForm } from './utilities.imports';

class SubmitOrder extends React.PureComponent {
  static propTypes = {
    enable: PropTypes.bool.isRequired,
    ccRenderKey: PropTypes.string.isRequired,
    requestCardNonce: PropTypes.func.isRequired,
    handleNonceResponse: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);

    this.sqrPaymentForm = SquarePaymentForm(props.ccRenderKey, props.handleNonceResponse);

    this.state = {
      ccRenderKey: '',
    };
  }

  componentDidMount() {
    console.warn('SubmitOrder has Mounted')
  }

  componentWillReceiveProps({ ccRenderKey }) {
    if (ccRenderKey !== this.state.ccRenderKey) {
      this.setState(() => ({ ccRenderKey }));
    }
  }

  handleOnSubmit = () => {
    this.props.requestCardNonce(this.sqrPaymentForm);
  }

  render() {
    const {
      enable,
      ccRenderKey,
    } = this.props;
    console.log('%cccRenderKey', 'background:red;', ccRenderKey);
    console.log('this.sqrPaymentForm: ', this.sqrPaymentForm);
    return (
    enable ?
      <div className="checkout__purchase-btn" >
        <Validation.components.Button
          type="button"
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
