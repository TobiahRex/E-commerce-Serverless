import React, { PureComponent } from 'react';
import Months from './monthConstants';
import Years from './yearConstants';

class CreditCardExpiration extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      expirationMonth: '',
      expirationYear: '',
    };
  }

  handleInputChange = e => this.setState({ [e.target.id]: e.target.value })

  renderYearOptions = years => years.map(year => (
    <option
      key={new Buffer(year, 'utf8').toString('base64')}
      value={`${year}`}
      className="input--option"
    >
      {year}
    </option>
  ))

  renderMonthOptions = months => months.map(({ name, number }) => (

  ))

  render() {
    return (
      <div className="input__row">
        <div className="input__row--exp-date">
          <div className="input__container--exp-month">
            <p>Expiration Date <span className="required">*</span></p>
            <select className="input--select" id="expirationMonth">
              <option value="Month" className="input--option">Month</option>
              {this.renderMonthOptions(Months)}
            </select>
          </div>
          <div className="input__container--exp-year">
            <p>{'\u00A0'}</p>
            <select className="input--select" id="expirationYear">
              <option value="Month" className="input--option">Year</option>
              {this.renderYearOptions(Years)}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default CreditCardExpiration;
