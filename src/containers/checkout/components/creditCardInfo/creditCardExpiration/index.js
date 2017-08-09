import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Validation from 'react-validation';
import Months from './monthConstants';
import Years from './yearConstants';

const { string, func } = PropTypes;

class CreditCardExpiration extends React.PureComponent {
  static propTypes = {
    ccExpireMonth: string.isRequired,
    ccExpireYear: string.isRequired,
    handleOnChange: func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      ccExpireMonth: '',
      ccExpireYear: '',
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
      name="ccExpireMonth"
      value={number}
      className="input--option"
    >{number} - {month}
    </option>
  ))

  renderYearOptions = years => years.map(year => (
    <option
      key={new Buffer(year, 'utf8').toString('base64')}
      name="ccExpireYear"
      value={year}
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

            <div id="sq-expiration-date"></div>
            {/* <Validation.components.Select
              errorClassName="is-invalid-input"
              name="ccExpireMonth"
              validations={['required']}
              value={this.state.ccExpireMonth}
              onChange={this.handleOnChange}
              >
              <option value="" className="input--option">
                Month
              </option>
              {this.renderMonthOptions(Months)}
            </Validation.components.Select> */}
          </div>

          {/* <div className="input__container--exp-year">
            <p>{'\u00A0'}</p>

            <Validation.components.Select
              errorClassName="is-invalid-input"
              name="ccExpireYear"
              validations={['required']}
              value={this.state.ccExpireMonth}
              onChange={this.handleOnChange}
            >
              <option value="" className="input--option">
                Year
              </option>
              {this.renderYearOptions(Years)}
            </Validation.components.Select>
          </div> */}
        </div>
      </div>
    );
  }
}
export default CreditCardExpiration;
