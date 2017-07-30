import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import {
  NameOnCard,
  CreditCardNumber,
  CreditCardExpiration,
  CreditCardCvn,
} from './component.imports';

const { func, string } = PropTypes;

class CreditCardInfo extends PureComponent {
  static propTypes = {
    ccNameOnCard: string.isRequired,
    ccNumber: string.isRequired,
    ccExpireMonth: string.isRequired,
    ccExpireYear: string.isRequired,
    ccCvn: string.isRequired,
    handleOnChange: func.isRequired,
    toggleModal: func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      ccNameOnCard: '',
      ccNumber: '',
      ccExpireMonth: '',
      ccExpireYear: '',
      ccCvn: '',
    };
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
      ccNameOnCard,
      ccNumber,
      ccExpireMonth,
      ccExpireYear,
      ccCvn,
    } = this.state;

    return (
      <div className="checkout__credit-card">
        <div className="title">
          <h3>Credit Card Information</h3>
        </div>

        <div className="input__row">
          <div className="input__row--cc-type">
            <p>Accepted Credit Card Types</p>
            <div className="types">
              <FontAwesome name="cc-visa" />
              <FontAwesome name="cc-mastercard" />
              <FontAwesome name="cc-discover" />
              <FontAwesome name="cc-amex" />
            </div>
          </div>
        </div>

        <NameOnCard
          ccNameOnCard={ccNameOnCard}
          handleOnChange={this.handleOnChange}
        />

        <CreditCardNumber
          ccNumber={ccNumber}
          handleOnChange={this.handleOnChange}
        />

        <CreditCardExpiration
          ccExpireMonth={ccExpireMonth}
          ccExpireYear={ccExpireYear}
          handleOnChange={this.handleOnChange}
        />

        <CreditCardCvn
          toggleModal={this.props.toggleModal}
          ccCvn={ccCvn}
          handleOnChange={this.handleOnChange}
        />
      </div>
    );
  }
}
export default CreditCardInfo;
