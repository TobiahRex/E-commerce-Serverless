import React, { PropTypes, PureComponent } from 'react';
import { connect } from 'react-redux';
import FooterCopyright from './footer_copyright';
import FooterContactUs from './footer_contactUs';
import FooterMyAccount from './footer_myAccount';
import FooterMemberships from './footer_memberships';
import FooterCustomerCare from './footer_customerCare';

class FooterContainer extends PureComponent {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
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
          {this.renderUserSxn()}
          <FooterCustomerCare />
        </ul>
        <div className="footer-line-break" />
        <FooterCopyright />
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  isLoggedIn: user.loggedIn,
});
export default connect(mapStateToProps, null)(FooterContainer);
