import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Prefectures } from './component.imports';

class PrefectureState extends PureComponent {
  static propTypes = {
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

  renderOptions = prefectures =>
  prefectures.map(({ en, kanji }) => (
    <option
      key={new Buffer(`${kanji}${en}`, 'utf8').toString('base64')}
      value={kanji}
    >{kanji} - {en}
    </option>
  ))

  render() {
    return (
      <div className="input__row">
        <div className="input__row--prefecture">
          <p>State / Prefecture <span className="required">*</span></p>
          <select
            name="shippingPrefectureState"
            className="input--select"
            value={this.props.shippingPrefectureState}
            onChange={this.handleOnChange}
            required
          >
            <option value="">Choose</option>
            {
              this.renderOptions(Prefectures)
            };
          </select>
        </div>
      </div>
    );
  }
}
export default PrefectureState;
