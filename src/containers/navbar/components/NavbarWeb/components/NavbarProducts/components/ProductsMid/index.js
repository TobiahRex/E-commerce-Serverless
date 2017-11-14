import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

function ProductsMid({ popularProducts, routerPush }) {
  return (
    <div className="floating-juice-container__middle-section">
      <div className="middle-section__section-hdr">
        <h2 className="section-hdr__flavor-hdr">
          <IntlMsg id="navbar.nav.juices.choose-flavor.title" />
        </h2>
      </div>
      <div className="middle-section__card-container">
        <a className="card-container__juice-card juice-card--1 w-inline-block" href="/french_vanilla_mocha">
          <div className="hdr-container--1 juice-card__hdr-container">
            <h4 className="hdr-container__juice-card-hdr juice-card-hdr--1">
              French Vanilla Mocha
            </h4>
          </div>
          <div className="juice-card__juice-img juice-img--1">
            <img
              alt="Product Title"
              className="card-img--1 juice-img__card-img"
              src="images/nj2jp-fvm-small-shadow.png"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

const { arrayOf, object, func } = PropTypes;
ProductsMid.propTypes = {
  popularProducts: arrayOf(object).isRequired,
  routerPush: func.isRequired,
};
export default ProductsMid;
