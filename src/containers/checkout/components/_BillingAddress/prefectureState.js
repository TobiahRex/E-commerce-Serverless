import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Prefectures,
  States,
} from './component.imports';

class PrefectureState extends PureComponent {
  static propTypes = {
    billingCountry: PropTypes.string.isRequired,
    billingPrefectureState: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      billingPrefectureState: props.billingPrefectureState,
    };
  }

  handleOnChange = e => this.props.handleOnChange(e)

  renderOptions = (country, prefectures, states) => {
    switch (country) {
      case 'Japan': return prefectures.map(({ en, kanji }) => (
        <option
          key={new Buffer(`${kanji}${en}`, 'utf8').toString('base64')}
          value={kanji}
        >{kanji} - {en}
        </option>
      ));
      case 'United States': return states.map(({ name, code }) => (
        <option
          key={new Buffer(`${name}${code}`, 'utf8').toString('base64')}
          value={code}
        >{name} ({code})
        </option>
      ));
      default: throw new Error('Could not render Prefecture / State options for Billing Address.  Check "prefectureState.js".');
    }
  }

  renderHelper = (country) => {
    if (country === 'United States' || country === 'Japan') {
      return (
        <select
          name="billingPrefectureState"
          className="input--select"
          value={this.props.billingPrefectureState}
          onChange={this.handleOnChange}
          required
        >
          <option value="">Choose</option>
          {
            this.renderOptions(country, Prefectures, States)
          };
        </select>
      );
    }
    return (
      <input
        name="billingPrefectureState"
        type="text"
        onChange={this.handleOnChange}
        value={this.state.prefectureState}
        required
      />
    );
  }

  render() {
    const {
      billingCountry: country,
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
