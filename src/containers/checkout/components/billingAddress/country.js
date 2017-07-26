import React, { PureComponent } from 'react';

class Country extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      country: '',
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
          />
        </div>
      </div>
    );
  }
}
export default Country;
