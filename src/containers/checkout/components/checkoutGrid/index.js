import React from 'react';
import PropTypes from 'prop-types';

import {
  squarePaymentForm as SqrPaymentForm,
} from './utilities.imports';

const { objectOf, any, string, func } = PropTypes;

let paymentForm = null;

class CheckoutGrid extends React.Component {
  static propTypes = {
    children: objectOf(any).isRequired,
    ccRenderKey: string.isRequired,
    handleNonceResponse: func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      ccRenderKey: props.ccRenderKey,
    };
  }

  componentDidMount() {
    console.warn('CHECKOUT GRID - Mounted');
    paymentForm = SqrPaymentForm(this.state.ccRenderKey, this.handleNonceResponse);
    paymentForm.build();
  }

  componentWillUnmount() {
    console.warn('CHECKOUT GRID - Will unmount');
  }

  componentWillReceiveProps({ ccRenderKey }) {
    if (ccRenderKey !== this.state.ccRenderKey);
  }

  handleNonceResponse = () => this.props.handleNonceResponse()

  render() {
    return (
      <div className="checkout__grid" key={this.props.ccRenderKey}>
        {this.props.children}
      </div>
    );
  }
}
export default CheckoutGrid;
