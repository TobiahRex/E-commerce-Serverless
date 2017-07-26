import React, { PureComponent } from 'react';

class Country extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      country: 'Japan',
    };
  }

  handleChange = e => this.setState({ country: e.target.value })

  render() {
    return (
      <div className="input__row">
        <div className="input__row--country">
          <p>Country <span className="required">*</span></p>
          <input
            name="country"
            type="text"
            onChange={this.handleChange}
            value={this.state.country}
            disabled
          />
        </div>
      </div>
    );
  }
}
export default Country;
