import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { Prefectures } from './component.imports';

class Prefecture extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      prefecture: props.prefecture,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  renderOptions = prefectures =>
  prefectures.map(({ en, kanji }) => (
    <option
      key={new Buffer(`${kanji}${en}`, 'utf8').toString('base64')}
      value={`${kanji}-${en}`}
    >{kanji} - {en}
    </option>
  ))

  render() {
    return (
      <div className="input__row">
        <div className="input__row--prefecture">
          <p>
            <IntlMsg id="checkout.shipping-address.prefecture" />&nbsp;
            <span className="required">*</span>
          </p>
          <Validation.components.Select
            errorClassName="is-invalid-input"
            name={`${this.props.type}Prefecture`}
            containerClassName=""
            validations={['required']}
            value={this.props.prefecture}
            onChange={this.handleOnChange}
          >
            <option value="">
              <IntlMsg id="checkout.shipping-address.prefecture.choose" />
            </option>
            {
              this.renderOptions(Prefectures)
            };
          </Validation.components.Select>
        </div>
      </div>
    );
  }
}
const { string, func } = PropTypes;
Prefecture.propTypes = {
  type: string.isRequired,
  prefecture: string.isRequired,
  handleOnChange: func.isRequired,
};
export default Prefecture;
