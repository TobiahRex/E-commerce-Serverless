import React from 'react';
import PropTypes from 'prop-types';


function MainTitle({ vendor, mainTitle }) {
  return (
    <div className="main__title">
      <h1>{mainTitle[IntlLocale]}</h1>
      <p className="main__title--vendor">by {vendor[IntlLocale]}</p>
    </div>
  );
}
const { string, shape } = PropTypes;
MainTitle.propTypes = {
  vendor: shape({
    en: string,
    ja: string,
  }).isRequired,
  mainTitle: shape({
    en: string,
    ja: string,
  }).isRequired,
};
export default MainTitle;
