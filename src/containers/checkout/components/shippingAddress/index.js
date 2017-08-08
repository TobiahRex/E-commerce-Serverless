import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

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

const { string, func } = PropTypes;

class ShippingAddress extends React.Component {
  static propTypes = {
    shippingFirstName: string.isRequired,
    shippingLastName: string.isRequired,
    shippingEmail: string.isRequired,
    shippingAddressLine1: string.isRequired,
    shippingAddressLine2: string.isRequired,
    shippingCountry: string.isRequired,
    shippingPrefecture: string.isRequired,
    shippingCity: string.isRequired,
    shippingPostalCode: string.isRequired,
    shippingPhoneNumber: string.isRequired,
    handleOnChange: func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      shippingFirstName: '',
      shippingLastName: '',
      shippingEmail: '',
      shippingAddressLine1: '',
      shippingAddressLine2: '',
      shippingCountry: '',
      shippingPrefecture: '',
      shippingCity: '',
      shippingPostalCode: '',
      shippingPhoneNumber: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextPropsCopy = Object.assign({}, nextProps);
    delete nextPropsCopy.handleOnChange;
    if (!_.isEqual(nextProps, this.props)) this.setState({ ...nextPropsCopy });
  }

  handleOnChange = e => this.props.handleOnChange(e)

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

        <Email
          shippingEmail={this.state.shippingEmail}
          handleOnChange={this.handleOnChange}
        />

        <AddressLine
          required
          lineNumber={1}
          shippingAddressLine={this.state.shippingAddressLine1}
          handleOnChange={this.handleOnChange}
        />

        <AddressLine
          required={false}
          lineNumber={2}
          shippingAddressLine={this.state.shippingAddressLine2}
          handleOnChange={this.handleOnChange}
        />

        <Country />

        <Prefecture
          shippingPrefecture={this.state.shippingPrefecture}
          handleOnChange={this.handleOnChange}
        />

        <City
          shippingCity={this.state.shippingCity}
          handleOnChange={this.handleOnChange}
        />

        <PostalCode
          shippingPostalCode={this.state.shippingPostalCode}
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
