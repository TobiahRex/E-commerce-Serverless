import React, { PureComponent } from 'react';

class PrefectureState extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      prefectureState: '',
    };
  }

  handleChange = e => this.setState({ prefectureState: e.target.value })

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
