import React from 'react';

import {
  FirstName,
  LastName,
  Email,
  AddressLine,
  Country,
  PrefectureState,
  PostalCode,

  City,
  PhoneNumber,
} from './component.imports';

class BillingAddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      billingFirstName: '',
      billingLastName: '',
      billingEmail: '',
      billingAddressLine1: '',
      billingAddressLine2: '',
      billingCountry: '',
      billingPrefectureState: '',
      billingPostalCode: 0,
      billingPhoneNumber: '',
      billingCity: '',
    };
  }

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div className="checkout__billing">
        <div className="title">
          <h3>Billing Address</h3>
        </div>
        <div className="input__row">
          <FirstName
            billingFirstName={this.state.billingFirstName}
            handleOnChange={this.handleOnChange}
          />
          <LastName
            billingLastName={this.state.billingLastName}
            handleOnChange={this.handleOnChange}
          />
        </div>

        <Email
          billingEmail={this.state.billingEmail}
          handleOnChange={this.handleOnChange}
        />

        <AddressLine
          required
          lineNumber={1}
          billingAddressLine={this.state.billingAddressLine1}
          handleOnChange={this.handleOnChange}
        />

        <AddressLine
          lineNumber={2}
          billingAddressLine={this.state.billingAddressLine2}
          handleOnChange={this.handleOnChange}
        />

        <Country
          billingCountry={this.state.billingCountry}
          handleOnChange={this.handleOnChange}
        />

        <PrefectureState
          billingCountry={this.state.billingCountry}
          billingPrefectureState={this.state.billingPrefectureState}
          handleOnChange={this.handleOnChange}
        />

        <PostalCode
          billingPostalCode={this.state.billingPostalCode}
          handleOnChange={this.handleOnChange}
        />

        <City
          billingCity={this.state.billingCity}
          handleOnChange={this.handleOnChange}
        />

        <PhoneNumber
          billingPhoneNumber={this.state.billingPhoneNumber}
          handleOnChange={this.handleOnChange}
        />

        {/* TODO: MVP2
            <SameAsBilling />
        */}
      </div>
    );
  }
}
export default BillingAddress;
