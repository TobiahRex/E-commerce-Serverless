import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FooterCopyright from './footer_copyright';
import FooterContactUs from './footer_contactUs';
import FooterMyAccount from './footer_myAccount';
import FooterMemberships from './footer_memberships';
import FooterCustomerCare from './footer_customerCare';
import FooterPaymentSticker from './footer_paymentSticker';

const { bool } = PropTypes;

class FooterContainer extends PureComponent {
  static propTypes = {
    isLoggedIn: bool,
  }
  static defaultProps = {
    isLoggedIn: false,
  }
  renderUserSxn = () => {
    if (this.props.isLoggedIn) return <FooterMyAccount />;
    return <FooterMemberships />;
  }

  render() {
    return (
      <div className="footer-main-sections-container">
        <ul className="footer-main-sections-list">
          <FooterContactUs />
          {/* {this.renderUserSxn()} */}
          <FooterCustomerCare />
          <FooterPaymentSticker />
        </ul>
        <div className="footer-line-break" />
        <FooterCopyright />
      </div>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  isLoggedIn: auth.loggedIn,
});
export default connect(mapStateToProps, null)(FooterContainer);
