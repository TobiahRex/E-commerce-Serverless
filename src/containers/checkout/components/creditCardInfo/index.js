import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import _ from 'lodash';
import {
  NameOnCard,
  CreditCardNumber,
  CreditCardExpiration,
  CvnAndZip,
} from './component.imports';
import {
  squarePaymentForm as SqrPaymentForm,
} from '../../../../services/utils/squarePaymentForm';

const { func, string } = PropTypes;

class CreditCardInfo extends React.Component {
  static propTypes = {
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
      ccNumber: '',
      ccExpireMonth: '',
      ccExpireYear: '',
      ccCvn: '',
      ccZip: '',
    };
  }

  componentDidMount() {
    SqrPaymentForm.build();
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
      ccNumber,
      ccExpireMonth,
      ccExpireYear,
      ccCvn,
      ccZip,
    } = this.state;

    return (
      <div className="checkout__credit-card">
        <div className="title">
          <h3>
            <IntlMsg id="checkout.credit-card.title" />
          </h3>
        </div>

        <div className="input__row">
          <div className="input__row--cc-type">
            <p>
              <IntlMsg id="checkout.credit-card.accepted" />
            </p>
            <div className="types">
              <FontAwesome name="cc-visa" />
              <FontAwesome name="cc-mastercard" />
              <FontAwesome name="cc-discover" />
              <FontAwesome name="cc-jcb" />
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
