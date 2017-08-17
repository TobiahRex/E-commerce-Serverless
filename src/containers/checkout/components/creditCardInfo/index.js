import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';
import {
  Country,
  NameOnCard,
  CreditCardNumber,
  CreditCardExpiration,
  CvnAndZip,
} from './component.imports';

const { func, string } = PropTypes;

class CreditCardInfo extends React.Component {
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
      ccNameOnCard: '',
      ccRenderKey: props.ccRenderKey,
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

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(nextProps, this.props)) return true;
    if (!_.isEqual(nextState, this.state)) return true;
    return false;
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    const {
      ccNameOnCard,
      ccRenderKey,
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

        <Country
          country={ccCountry}
          handleOnChange={this.handleOnChange}
        />
        
        <NameOnCard
          show={!!ccCountry}
          ccNameOnCard={ccNameOnCard}
          handleOnChange={this.handleOnChange}
        />

        <CreditCardNumber
          show={!!ccCountry}
          ccNumber={ccNumber}
          handleOnChange={this.handleOnChange}
        />

        <CreditCardExpiration
          show={!!ccCountry}
          ccExpireMonth={ccExpireMonth}
          ccExpireYear={ccExpireYear}
          handleOnChange={this.handleOnChange}
        />

        <CvnAndZip
          show={!!ccCountry}
          ccRenderKey={ccRenderKey}
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
