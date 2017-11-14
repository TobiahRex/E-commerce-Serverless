import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

const { func } = PropTypes;
class NavbarNavsJuicesDropdnBottomthird extends PureComponent {
  static propTypes = {
    toggleNavbarDropdown: func.isRequired,
  }

  toggleNavbarDropdown = () => this.props.toggleNavbarDropdown;

  recommendClick = (location) => {
    this.toggleNavbarDropdown();
    browserHistory.push(location);
  }

  render() {
    return (
      <div className="shop-dropdown-content-bottomThird">
        <span className="shop-dropdown-content-bottomThird-leftSide">
          <button
            id="/contact_us"
            className="shop-dropdown-content-bottomThird-leftSide-recommend sweep-right"
            onClick={e => this.recommendClick(e.target.getAttribute('id'))}
          >
            <IntlMsg id="navbar.nav.juices.recommend" />
          </button>
        </span>
        <span className="shop-dropdown-content-bottomThird-rightSide">
          <h4 className="shop-dropdown-content-bottomThird-rightSide-promoSoft">
            <IntlMsg id="navbar.nav.juices.discount.percentage" />
          </h4>
          <h4 className="shop-dropdown-content-bottomThird-rightSide-promoHard">
            <IntlMsg id="navbar.nav.juices.discount.reason" />
          </h4>
        </span>
      </div>
    );
  }
}

export default NavbarNavsJuicesDropdnBottomthird;
