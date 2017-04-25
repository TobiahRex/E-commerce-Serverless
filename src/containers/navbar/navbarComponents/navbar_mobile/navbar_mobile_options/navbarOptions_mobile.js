import React from 'react';

import NavbarMobileOptionsLanguage from './navbar_mobile_language/navbarOptions_mobile_language';

class NavbarMobileOptions extends React.PureComponent {
  onLanguageChange = () => {

  };

  render() {
    return (
      <div className="navbar__mobile--options">
        <NavbarMobileOptionsLanguage />
      </div>
    );
  }
}
// const mapDispatchToProps = (dispatch) => ({
//   selectLanguage: laguage => dispatch()
// })
export default NavbarMobileOptions;
