import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Prefectures } from './component.imports';

class PrefectureState extends PureComponent {
  static propTypes = {
    shippingCountry: PropTypes.string.isRequired,
    shippingPrefectureState: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      shippingPrefectureState: props.shippingPrefectureState,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  renderOptions = (country, prefectures) => prefectures.map(({ en, kanji }) =>
  (
    <option
      key={new Buffer(`${kanji}${en}`, 'utf8').toString('base64')}
      value={kanji}
    >{kanji} - {en}
    </option>
  ))

  renderHelper = (country) => {
    if (country === 'United States' || country === 'Japan') {
      return (
        <select
          name="shippingPrefectureState"
          className="input--select"
          value={this.props.shippingPrefectureState}
          onChange={this.handleOnChange}
          required
        >
          <option value="Choose">Choose</option>
          {
            this.renderOptions(country, Prefectures, States)
          };
        </select>
      );
    }
    return (
      <input
        name="shippingPrefectureState"
        type="text"
        onChange={this.handleOnChange}
        value={this.state.prefectureState}
        required
      />
    );
  }

  render() {
    const {
      shippingCountry: country,
    } = this.props;

    return (
      <div className="input__row">
        <div className="input__row--prefecture">
          <p>State / Prefecture <span className="required">*</span></p>
          {this.renderHelper(country)}
        </div>
      </div>
    );
  }
}
export default PrefectureState;
