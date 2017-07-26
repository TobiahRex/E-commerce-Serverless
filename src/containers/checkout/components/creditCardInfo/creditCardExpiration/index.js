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

  render() {
    return (
      <div className="input__row">
        <div className="input__row--exp-date">
          <div className="input__container--exp-month">
            <p>Expiration Date <span className="required">*</span></p>
            <select className="input--select" id="expirationMonth">
              <option value="Month" className="input--option">Month</option>
              <option value="01 - January" className="input--option">
                01 - January
              </option>
              <option value="02 - February" className="input--option">
                02 - February
              </option>
              <option value="03 - March" className="input--option">
                03 - March
              </option>
              <option value="04 - April" className="input--option">
                04 - April
              </option>
              <option value="05 - May" className="input--option">
                05 - May
              </option>
              <option value="01 - January" className="input--option">
                06 - June
              </option>
              <option value="01 - January" className="input--option">
                07 - July
              </option>
              <option value="01 - January" className="input--option">
                08 - August
              </option>
              <option value="01 - January" className="input--option">
                09 - September
              </option>
              <option value="01 - January" className="input--option">
                10- October
              </option>
              <option value="01 - January" className="input--option">
                11 - November
              </option>
              <option value="01 - January" className="input--option">
                12 - December
              </option>
            </select>
          </div>
          <div className="input__container--exp-year">
            <p>{'\u00A0'}</p>
            <select className="input--select" id="expirationYear">
              <option value="Month" className="input--option">Year</option>
              <option value="2017" className="input--option">
                2017
              </option>
              <option value="2018" className="input--option">
                2018
              </option>
              <option value="2019" className="input--option">
                2019
              </option>
              <option value="2020" className="input--option">
                2020
              </option>
              <option value="2021" className="input--option">
                2021
              </option>
              <option value="2017" className="input--option">
                2022
              </option>
              <option value="2017" className="input--option">
                2023
              </option>
              <option value="2017" className="input--option">
                2024
              </option>
              <option value="2017" className="input--option">
                2025
              </option>
              <option value="2017" className="input--option">
                2026
              </option>
              <option value="2017" className="input--option">
                2027
              </option>
              <option value="2017" className="input--option">
                2028
              </option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
export default CreditCardExpiration;
