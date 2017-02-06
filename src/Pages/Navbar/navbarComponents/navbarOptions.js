import React, { PropTypes, PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

class NavbarOptions extends PureComponent {
  onLanguageChange = () => console.info('changed language');
  onCurrencyChange = () => console.info('changed currency');
  render() {
    return (
      <div className="navbar navbarOptions acitonSection upper">
        <div className="navbar actionSection upper language">
          <div className="navbar actionSection upper language flag-us">
            <img
              src="https://s3-ap-southeast-2.amazonaws.com/nj2jp/language_usFlagnavbar_languageGrp_us.png"
              alt="us-flag"
              className="navbar actionSection upper language flag-us image"
            />
          </div>
          <div className="navbar actionSection upper language title">
            <span>LANGUAGE</span>
          </div>
          <div className="navbar actionSection upper language chevron">
            <FontAwesome
              name="chevron-down"
              className="navbar actionSection upper language chevron icon"
            />
          </div>
        </div>
        <div className="navbar actionSection upper currency">
          <div className="navbar actionSection upper currency dollar">
            <FontAwesome
              name="usd"
              className="navbar actionSection upper currency dollar icon"
            />
          </div>
          <div className="navbar actionSection upper currency title">
            <span>CURRENCY</span>
          </div>
          <div className="navbar actionSection upper currency chevron">
            <FontAwesome
              name="chevron-down"
              className="navbar actionSection upper currency chevron icon"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default NavbarOptions;
