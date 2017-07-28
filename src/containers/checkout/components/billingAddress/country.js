import React from 'react';
import PropTypes from 'prop-types';
import { Countries } from './component.imports';

class Country extends React.PureComponent {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    billingCountry: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      billingCountry: props.billingCountry || '',
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
            required
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
