import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
            name={`${this.props.type}Prefecture`}
            className="input--select"
            value={this.props.prefecture}
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
const { string, func } = PropTypes;
Prefecture.propTypes = {
  type: string.isRequired,
  prefecture: string.isRequired,
  handleOnChange: func.isRequired,
};
export default Prefecture;
