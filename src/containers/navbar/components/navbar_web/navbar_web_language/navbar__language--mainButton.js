import React from 'react';
import PropTypes from 'prop-types';

function NavbarOptionsLanguageButton({ children }) {
  return (
    <span className="language-main-button">
      {children}
    </span>
  );
}
const { objectOf, any } = PropTypes;
NavbarOptionsLanguageButton.propTypes = {
  children: objectOf(any).isRequired,
};
export default NavbarOptionsLanguageButton;
