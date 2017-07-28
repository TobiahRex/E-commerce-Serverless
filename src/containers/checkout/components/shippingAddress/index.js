import React from 'react';

import {
  FirstName,
  LastName,
  Email,
  AddressLine,
  Country,
  Prefecture,
  PostalCode,
  City,
  PhoneNumber,
} from './component.imports';

class ShippingAddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shippingFirstName: '',
      shippingLastName: '',
      shippingAddressLine1: '',
      shippingAddressLine2: '',
      shippingCountry: '',
      shippingPrefectureState: '',
      shippingCity: '',
      shippingPostalCode: '',
      shippingPhoneNumber: '',
    };
  }

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div className="checkout__shipping">
        <div className="title">
          <h3>Shipping Address</h3>
        </div>
        <div className="input__row">
          <FirstName
            shippingFirstName={this.state.shippingFirstName}
            handleOnChange={this.handleOnChange}
          />
          <LastName
            shippingLastName={this.state.shippingLastName}
            handleOnChange={this.handleOnChange}
          />
        </div>

        <AddressLine
          required
          lineNumber={1}
          shippingAddressLine1={this.state.shippingAddressLine1}
          handleOnChange={this.handleOnChange}
        />
        
        <AddressLine
          lineNumber={2}
          shippingAddressLine2={this.state.shippingAddressLine2}
          handleOnChange={this.handleOnChange}
        />

        <Country />

        <Prefecture
          shippingPrefecture={this.state.shippingPrefecture}
          handleOnChange={this.handleOnChange}
        />

        <PostalCode
          shippingPostalCode={this.state.shippingPostalCode}
          handleOnChange={this.handleOnChange}
        />

        <City
          shippingCity={this.state.shippingCity}
          handleOnChange={this.handleOnChange}
        />

        <PhoneNumber
          shippingPhoneNumber={this.state.shippingPhoneNumber}
          handleOnChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default ShippingAddress;
