import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const { string, func } = PropTypes;

class CreditCardExpiration extends React.Component {
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
    const {
      ccExpireMonth,
      ccExpireYear,
    } = nextProps;
    if (nextProps !== this.props) {
      this.setState({ ccExpireMonth, ccExpireYear });
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
      <div className="input__row">
        <div className="input__row--exp-date">

          <div className="input__container--exp-month">
            <p>
              <IntlMsg id="checkout.credit-card.expiration" />&nbsp;
              <span className="required">*</span>
            </p>

            <div id="sq-expiration-date" />
          </div>
        </div>
      </div>
    );
  }
}
export default CreditCardExpiration;
