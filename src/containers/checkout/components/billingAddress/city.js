import React, { PureComponent } from 'react';

class City extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
    };
  }

  handleChange = e => this.setState({ city: e.target.value })

  render() {
    return (
      <div className="input__row">
        <div className="input__row--city">
          <p>City <span className="required">*</span></p>
          <input
            name="city"
            type="text"
            onChange={this.handleChange}
            value={this.state.city}
          />
        </div>
      </div>
    );
  }
}
export default City;
