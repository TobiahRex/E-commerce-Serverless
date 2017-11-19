import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';

function NavbarNavHdr({
  ix,
  wid,
  header,
  link = '',
}) {
  if (link) {
    return (
      <Link
        className="nav-container__hdr-section w-inline-block"
        data-ix={ix}
        data-w-id={wid}
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
const { string } = PropTypes;
NavbarNavHdr.propTypes = {
  ix: string.isRequired,
  wid: string.isRequired,
  link: string,
  header: string.isRequired,
};
NavbarNavHdr.defaultProps = {
  link: '',
};
export default NavbarNavHdr;
