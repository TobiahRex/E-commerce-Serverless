import React, { PropTypes, Component } from 'react';
import { browserHistory } from 'react-router';
//
// import Navbar from '../../Navbar/navbarComponents/navbarMain';

// export default function AgeVerification(props) {
//   return (
//     <div>
//       <div className="age-verification">
//         <div className="age-verification-modal">
//           <img alt="Age Verification Logo" className="age-verification-logo-img" />
//           <div className="age-verification-modal-description">
//             <p>
//               NicJuice2Japan sells products that are intended for use
//               by vapers of legal smoking age or older.
//             </p>
//             <br />
//             <br />
//             <p>
//               By confirming, you are verifying that you are at least
//               20 years of age as per Japanese Law.
//             </p>
//           </div>
//           <div className="age-verification-modal-buttons-container">
//             <a
//               href=""
//               onClick={() => browserHistory.push('/home')}
//               className="age-verification-modal-buttons-confirm"
//             >Confirm</a>
//             <a
//               href="http://www.google.com"
//               className="age-verification-modal-buttons-deny"
//             >Deny</a>
//           </div>
//         </div>
//       </div>
//       <Navbar />
//       {props.children}
//     </div>
//   );
// }
import { connect } from 'react-redux';
import NavbarWeb from '../../Navbar/navbarComponents/navbar_web/navbar_web';
import NavbarMobile from '../../Navbar/navbarComponents/navbar_mobile/navbar_mobile';
import saveActivePageActions from '../../../Redux/ActivePageRedux';
import genDynamicTitle from '../../../Services/dynamicTitle';

// import AgeVerification from '../../Home/homeComponents/homepage_ageVerification';

class Navbar extends Component {
  static defaultProps = {

  }

  static propTypes = {
    children: PropTypes.objectOf(PropTypes.any),
    saveActivePage: PropTypes.func.isRequired,
    activePage: PropTypes.objectOf(PropTypes.string),
  }

  constructor(props) {
    super(props);

    this.state = {
      currentActivePage: this.props.activePage.current_active_page,
      currentActiveUrl: this.props.activePage.current_active_url,
      previousPage: this.props.activePage.previous_page,
      previousPageUrl: this.props.activePage.previous_page_url,
    };
  }

  saveActivePage = () => {
    const { title, url } = genDynamicTitle();
    this.props.saveActivePage(title, url);
  }

  render() {
    return (
      <div>
        <div className="age-verification">
          <div className="age-verification-modal">
            <img alt="Age Verification Logo" className="age-verification-logo-img" />
            <div className="age-verification-modal-description">
              <p>
                NicJuice2Japan sells products that are intended for use
                by vapers of legal smoking age or older.
              </p>
              <br />
              <br />
              <p>
                By confirming, you are verifying that you are at least
                20 years of age as per Japanese Law.
              </p>
            </div>
            <div className="age-verification-modal-buttons-container">
              <a
                href=""
                onClick={() => browserHistory.push('/home')}
                className="age-verification-modal-buttons-confirm"
              >Confirm</a>
              <a
                href="http://www.google.com"
                className="age-verification-modal-buttons-deny"
              >Deny</a>
            </div>
          </div>
        </div>
        <header className="navbar-comp-container">
          <NavbarWeb />
          <NavbarMobile />
        </header>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = ({ active_page }) => ({
  activePage: active_page,
});
const mapDispatchToProps = dispatch => ({
  saveActivePage: (title, currentPath) =>
  dispatch(saveActivePageActions.saveActivePage(title, currentPath)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
