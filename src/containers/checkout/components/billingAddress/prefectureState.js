import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Prefectures from './prefectureConstants';
import States from './stateConstants';

class PrefectureState extends PureComponent {
  static propTypes = {
    country: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      prefectureState: '',
    };
  }

  handleChange = e => this.setState({ prefectureState: e.target.value })

  renderOptions = (country, prefectures, states) => {
    switch (country) {
      case 'Japan (JA)': return prefectures.map(({ en, kanji }) => (
        <div></div>
      ));
      case 'United States (US)': return prefectures.map(({ name, code }) => (
        <div></div>
      ));
    } default; break;
  }

  render() {
    return (
      <div className="input__row">
        <div className="input__row--prefecture">
          <p>State / Prefecture <span className="required">*</span></p>
          <input
            name="prefectureState"
            type="text"
            onChange={this.handleChange}
            value={this.state.prefectureState}
          />
        </div>
      </div>
    );
  }
}
export default PrefectureState;
