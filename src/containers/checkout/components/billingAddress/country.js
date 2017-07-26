import React, { PureComponent } from 'react';
import Countries from './countryConstants';

class Country extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      country: '',
    };
  }

  handleChange = e => this.setState({ country: e.target.value })

  renderCountryOptions = countries => countries.map(({ name, code }) => (
    <option
      key={new Buffer(`${name}${code}`, 'utf8').toString('base64')}
      value={name}
    >{name} ({code})
    </option>
  ))

  render() {
    return (
      <div className="input__row">
        <div className="input__row--country">
          <p>Country <span className="required">*</span></p>
          <select
            name="billingCountry"
            className="input--select"
            value={this.state.country}
            onChange={this.handleChange}
          >
            <option value="Choose">Choose</option>
            {this.renderCountryOptions(Countries)}
          </select>
        </div>
      </div>
    );
  }
}
export default Country;
