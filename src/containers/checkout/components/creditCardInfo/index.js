import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  HdrBox,
  AcceptedCards,
  CvnAndZip,
  NameOnCard,
  CreditCardNumber,
  CreditCardExpire,
} from './components';

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

  componentWillReceiveProps(nextProps) {
    const nextPropsCopy = Object.assign({}, nextProps);
    delete nextPropsCopy.handleOnChange;
    delete nextPropsCopy.toggleModal;
    if (!_.isEqual(nextProps, this.props)) this.setState({ ...nextPropsCopy });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;
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
      <div className="main-section__credit-card">
        <HdrBox />

        <AcceptedCards />

        <div className="credit-card__info-container-form">
          <NameOnCard
            ccNameOnCard={ccNameOnCard}
            handleOnChange={this.handleOnChange}
          />

          <CreditCardNumber
            ccNumber={ccNumber}
            handleOnChange={this.handleOnChange}
          />

          <CreditCardExpire
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

      </div>
    );
  }
}
export default CreditCardInfo;
