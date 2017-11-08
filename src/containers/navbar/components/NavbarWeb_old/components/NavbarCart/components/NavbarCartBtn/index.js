import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NavbarCartBtn({ qty }) {
  return (
    <span className="mainbtn">
      <Link to="/cart" className="mainbtn-mycart-link">
        <div className="mainbtn-mycart-link-title">
          <span>
            <IntlMsg id="navbar.cart.cart-button" />
          </span>
        </div>
        <div className="mainbtn-mycart-link-cartqty">
          <span>
            {qty}
          </span>
        </div>
      </Link>
    </span>
  );
}
NavbarCartBtn.propTypes = {
  qty: PropTypes.number.isRequired,
};
export default NavbarCartBtn;
