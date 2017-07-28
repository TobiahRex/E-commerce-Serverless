import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
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
          <Validation.components.Select
            errorClassName="is-invalid-input"
            name="billingCountry"
            validations={['required']}
            value={this.props.billingCountry}
            onChange={this.handleOnChange}
          >
            <option value="">Choose</option>
            <hr />
            <option value="United States">United States (US)</option>
            <option value="Japan">Japan (JA)</option>
            <hr />
            {this.renderCountryOptions(Countries)}
          </Validation.components.Select>
        </div>
      </div>
    );
  }
}
export default Country;
