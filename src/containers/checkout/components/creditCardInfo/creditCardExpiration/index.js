import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// import Validation from 'react-validation';
// import Months from './monthConstants';
// import Years from './yearConstants';

const { string, func } = PropTypes;

class CreditCardExpiration extends React.Component {
  static propTypes = {
    ccRenderKey: string.isRequired,
    ccExpireMonth: string.isRequired,
    ccExpireYear: string.isRequired,
    handleOnChange: func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      ccExpireMonth: '',
      ccExpireYear: '',
      ccRenderKey: '',
    };
  }
  componentDidMount() {
    console.info('CreditCardExpiration did Mount.')
  }

  componentWillUnmount() {
    console.info('CreditCardExpiration will Unmount.')
  }
  componentWillReceiveProps(nextProps) {
    const {
      ccRenderKey,
      ccExpireMonth,
      ccExpireYear,
    } = nextProps;
    if (nextProps !== this.props) {
      this.setState({ ccRenderKey, ccExpireMonth, ccExpireYear });
    }
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
      <div className="input__row" key={this.props.ccRenderKey}>
        <div className="input__row--exp-date">

          <div className="input__container--exp-month">
            <p>Expiration Date <span className="required">*</span></p>

            <div id="sq-expiration-date" />
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
