import React, { PureComponent } from 'react';
import { Prefectures } from './component.imports';

class Prefecture extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shippingPrefecture: '',
    };
  }

  handleOnChange = e => this.setState({ shippingPrefecture: e.target.value })

  renderPrefectureOptions = prefectures => prefectures.map(({ en, kanji }) => (
    <option
      key={new Buffer(`${en}${kanji}`, 'utf8').toString('base64')}
      value={kanji}
    >{kanji} - {en}
    </option>
  ))

  render() {
    return (
      <div className="input__row">
        <div className="input__row--prefecture">
          <p>Prefecture <span className="required">*</span></p>
          <select
            name="shippingPrefecture"
            className="input--select"
            value={this.state.shippingPrefecture}
            onChange={this.handleOnChange}
          >
            <option value="Choose">Choose</option>
            {this.renderPrefectureOptions(Prefectures)}
          </select>
        </div>
      </div>
    );
  }
}
export default Prefecture;
