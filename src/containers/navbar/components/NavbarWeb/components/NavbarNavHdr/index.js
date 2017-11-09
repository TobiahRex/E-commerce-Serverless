import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NavbarHdrSxn({
  ix,
  header,
  link = '',
}) {
  if (link) {
    return (
      <Link
        className="nav-container__hdr-section w-inline-block"
        data-ix={ix}
        to={link}
      >
        <div className="hdr-section__option--title">
          <IntlMsg id={header} />
        </div>
      </Link>
    );
  }

  return (
    <div
      className="nav-container__hdr-section w-inline-block"
      data-ix={ix}
    >
      <div className="hdr-section__option--title">
        <IntlMsg id={header} />
      </div>
    </div>
  );
}
NavbarHdrSxn.propTypes = {
  link: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  ix: PropTypes.string.isRequired,
};
export default NavbarHdrSxn;
