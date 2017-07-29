import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Months from './monthConstants';
import Years from './yearConstants';

const { string, func } = PropTypes;

class CreditCardExpiration extends React.PureComponent {
  static propTypes = {
    ccNameOnCard: string.isRequired,
    handleOnChange: func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      expirationMonth: '',
      expirationYear: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextPropsCopy = Object.assign({}, nextProps);
    delete nextPropsCopy.handleOnChange;
    if (!_.isEqual(nextProps, this.props)) this.setState({ ...nextPropsCopy });
  }

  handleOnChange = e => this.props.handleOnChange(e)


  renderMonthOptions = months => months.map(({ month, number }) => (
    <option
      key={new Buffer(`${month}${number}`, 'utf8').toString('base64')}
      name="expirationMonth"
      value={number}
      className="input--option"
    >{number} - {month}
    </option>
  ))

  renderYearOptions = years => years.map(year => (
    <option
      key={new Buffer(year, 'utf8').toString('base64')}
      name="expirationYear"
      value={`${year}`}
      className="input--option"
    >{year}
    </option>
  ))

  render() {
    return (
      <div className="input__row">
        <div className="input__row--exp-date">
          <div className="input__container--exp-month">
            <p>Expiration Date <span className="required">*</span></p>

            <select
              name="creditCardExpirationMonth"
              className="input--select"
              value={this.state.expirationMonth}
              onChange={this.handleOnChange}
            >
              <option value="" className="input--option">
                Month
              </option>
              {this.renderMonthOptions(Months)}
            </select>

          </div>
          <div className="input__container--exp-year">
            <p>{'\u00A0'}</p>

            <select
              name="creditCardExpirationYear"
              className="input--select"
              value={this.state.expirationYear}
              onChange={this.handleOnChange}
            >
              <option value="" className="input--option">
                Year
              </option>
              {this.renderYearOptions(Years)}
            </select>

          </div>
        </div>
      </div>
    );
  }
}
export default CreditCardExpiration;
