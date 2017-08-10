import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';
import {
  // NameOnCard,
  Country,
  CreditCardNumber,
  CreditCardExpiration,
  CvnAndZip,
} from './component.imports';

const { func, string } = PropTypes;

class CreditCardInfo extends PureComponent {
  static propTypes = {
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
      ccCountry: '',
      ccNumber: '',
      ccExpireMonth: '',
      ccExpireYear: '',
      ccCvn: '',
      ccZip: '',
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
      ccCountry,
      ccNumber,
      ccExpireMonth,
      ccExpireYear,
      ccCvn,
      ccZip,
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
              <FontAwesome name="cc-jcb" />
              <FontAwesome name="cc-amex" />
            </div>
          </div>
        </div>

        {/* NOTE: "Not required from Square."
          <NameOnCard
          ccNameOnCard={ccNameOnCard}
          handleOnChange={this.handleOnChange}
        /> */}

        <Country
          country={ccCountry}
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

        <CvnAndZip
          toggleModal={this.props.toggleModal}
          ccCvn={ccCvn}
          ccZip={ccZip}
          handleOnChange={this.handleOnChange}
        />

      </div>
    );
  }
}
export default CreditCardInfo;
