import React from 'react';
import PropTypes from 'prop-types';
import Countries from './countryConstants';

class Country extends React.PureComponent {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    country: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      country: props.country || '',
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

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
            onChange={this.handleOnChange}
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
