import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';
import {
  Country,
  CreditCardNumber,
  CreditCardExpiration,
  CvnAndZip,
} from './component.imports';

const { func, string } = PropTypes;

class CheckoutGrid extends React.Component {
  static propTypes = {
    ccRenderKey: string.isRequired,
    ccCountry: string.isRequired,
    ccNumber: string.isRequired,
    ccExpireMonth: string.isRequired,
    ccExpireYear: string.isRequired,
    ccCvn: string.isRequired,
    ccZip: string.isRequired,
    handleOnChange: func.isRequired,
    toggleModal: func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      ccRenderKey: props.ccRenderKey,
      ccCountry: '',
      ccNumber: '',
      ccExpireMonth: '',
      ccExpireYear: '',
      ccCvn: '',
      ccZip: '',
    };
  }

  componentDidMount() {
    console.warn('EXPRESS CHECKOUT - Mounted');
    paymentForm = SqrPaymentForm(this.state.ccRenderKey, this.handleNonceResponse);
    paymentForm.build();
  }

  componentWillUnmount() {
    console.warn('EXPRESS CHECKOUT - Will unmount');
  }

  componentWillReceiveProps(nextProps) {
    const nextPropsCopy = Object.assign({}, nextProps);
    delete nextPropsCopy.handleOnChange;
    delete nextPropsCopy.toggleModal;
    if (!_.isEqual(nextProps, this.props)) this.setState({ ...nextPropsCopy });
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    const {
      ccRenderKey,
      ccCountry,
      ccNumber,
      ccExpireMonth,
      ccExpireYear,
      ccCvn,
      ccZip,
    } = this.state;

    return (
    <div className="checkout__grid">
      {this.props.children}
    </div>
    );
  }
}
export default CheckoutGrid;
