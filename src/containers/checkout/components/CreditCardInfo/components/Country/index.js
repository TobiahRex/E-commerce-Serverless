import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';

class Country extends React.Component {
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
      value={`${name}-${code}`}
    >{name} ({code})
    </option>
  ))

  render() {
    return (
      <div className="input__row">
        <div className="input__row--country">
          <p>
            <IntlMsg id="checkout.credit-card.billing-country" />&nbsp;
            <span className="required">*</span>
          </p>
          <Validation.components.Select
            errorClassName="is-invalid-input"
            name="ccCountry"
            validations={['required']}
            value={this.props.country}
            onChange={this.handleOnChange}
          >
            <option value="">
              <IntlMsg id="checkout.credit-card.billing-country.choose" />
            </option>
            <hr />
            <option value="United States-US">
              United States (US)
            </option>
            <option value="Japan-JP">
              Japan (JP)
            </option>
            {/* <hr /> */}
            {/* {this.renderCountryOptions(Countries)} */}
          </Validation.components.Select>
        </div>
      </div>
    );
  }
}
export default Country;
