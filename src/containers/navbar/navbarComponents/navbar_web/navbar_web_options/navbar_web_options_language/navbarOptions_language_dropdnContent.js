import React from 'react';
import PropTypes from 'prop-types';

function NavbarOptionsLanguageDropdnContent({
children }) {
  return (
    <span className="language-dropdown-content">
      {children}
    </span>
  );
}
const { objectOf, any } = PropTypes;
NavbarOptionsLanguageDropdnContent.propTypes = {
  children: objectOf(any).isRequired,
};
export default NavbarOptionsLanguageDropdnContent;
