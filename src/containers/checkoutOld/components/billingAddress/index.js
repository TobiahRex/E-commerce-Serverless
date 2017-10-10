import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  Country,
  // FirstName,
  // LastName,
  // Email,
  // AddressLine,
  // PrefectureState,
  // PostalCode,
  // City,
} from './component.imports';

const { string, func } = PropTypes;

class BillingAddress extends React.PureComponent {
  static propTypes = {
    handleOnChange: func.isRequired,
    billingCountry: string.isRequired,
    // billingFirstName: string.isRequired,
    // billingLastName: string.isRequired,
    // billingEmail: string.isRequired,
    // billingAddressLine1: string.isRequired,
    // billingAddressLine2: string.isRequired,
    // billingPrefectureState: string.isRequired,
    // billingCity: string.isRequired,
    // billingPostalCode: string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      billingCountry: '',
      // billingFirstName: '',
      // billingLastName: '',
      // billingEmail: '',
      // billingAddressLine1: '',
      // billingAddressLine2: '',
      // billingPrefectureState: '',
      // billingCity: '',
      // billingPostalCode: '',
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
      <div className="checkout__billing">
        <div className="title">
          <h3>Billing Address</h3>
        </div>
        {/* <div className="input__row">
          <FirstName
            billingFirstName={this.state.billingFirstName}
            handleOnChange={this.handleOnChange}
          />
          <LastName
            billingLastName={this.state.billingLastName}
            handleOnChange={this.handleOnChange}
          />
        </div> */}

        {/* <Email
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
        /> */}

        <Country
          billingCountry={this.state.billingCountry}
          handleOnChange={this.handleOnChange}
        />
        {/*
          <PrefectureState
          billingCountry={this.state.billingCountry}
          billingPrefectureState={this.state.billingPrefectureState}
          handleOnChange={this.handleOnChange}
          />

          <City
          billingCity={this.state.billingCity}
          handleOnChange={this.handleOnChange}
          />

          <PostalCode
          billingCountry={this.state.billingCountry}
          billingPostalCode={this.state.billingPostalCode}
          handleOnChange={this.handleOnChange}
        /> */}


        {/* TODO: MVP2
            <SameAsBilling />
        */}
      </div>
    );
  }
}
export default BillingAddress;
