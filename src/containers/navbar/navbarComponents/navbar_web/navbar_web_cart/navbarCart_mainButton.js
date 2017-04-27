import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function NavbarCartMainButton({ qty }) {
  return (
    <span className="mainbtn">
      <Link to="/cart" className="mainbtn-mycart-link">
        <div className="mainbtn-mycart-link-title">
          <span>
            My Cart
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
NavbarCartMainButton.propTypes = {
  qty: PropTypes.number.isRequired,
};
export default NavbarCartMainButton;
