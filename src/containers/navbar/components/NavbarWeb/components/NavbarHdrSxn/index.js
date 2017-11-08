import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMsg as IntlMsg } from 'react-intl';

function NavbarHdrSxn({ header }) {
  return (
    <Link className="nav-container__hdr-section w-inline-block" data-ix="nav-b-juice-hover" to="#">
      <div className="hdr-section__option--title">
        <IntlMsg id={header} />
      </div>
    </Link>
  );
}
NavbarHdrSxn.propTypes = {
  header: PropTypes.string.isRequired,
};
export default NavbarHdrSxn;
