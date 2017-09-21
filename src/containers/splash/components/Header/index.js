import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { NavBob } from '../'

const juices = ['pina_colada', 'french_vanilla_mocha', 'strawberries_n_cream', 'fruity_bamm_bamm', 'papple_berry', 'key_lime_pie'];

function Header({ mobile, height }) {
  return (
    <div className="splash-img__background" style={{ height }}>
      <div className="splash-img">
        <div className="splash-img__header-container">
          <div className="header-container__box" data-ix="fade-in-on-load">
            <div className="box__img--container">
              <img
                alt="NJ2JP"
                className="box__img"
                sizes="(max-width: 479px) 83vw, (max-width: 991px) 350px, 500px"
                src="images/nj2jp_oneLine_2-1.png"
                srcSet="images/nj2jp_oneLine_2-1-p-500.png 500w, images/nj2jp_oneLine_2-1-p-800.png 800w, images/nj2jp_oneLine_2-1-p-1080.png 1080w, images/nj2jp_oneLine_2-1-p-1600.png 1600w, images/nj2jp_oneLine_2-1-p-2000.png 2000w, images/nj2jp_oneLine_2-1-p-2600.png 2600w, images/nj2jp_oneLine_2-1-p-3200.png 3200w, images/nj2jp_oneLine_2-1.png 6200w"
                width="514"
              />
            </div>
            <div className="box__header-container">
              <h1 className="header-container__header" data-ix="staggered-load">
                <IntlMsg id="home.header.title" />
              </h1>
              <h1 className="header--2 header-container__header" data-ix="staggered-load-2">
                <IntlMsg id="home.header.subtitle" />
              </h1>
            </div>
            <div className="box__button-container">
              <button
                className="box__button w-inline-block primary-button shutter-out-horizontal"
                data-ix="button-load-hover"
                onClick={() => browserHistory.push(`/juice/${juices[Math.floor(Math.random() * (juices.length - 1))]}`)}
              >
                <p className="box__button--text">
                  <IntlMsg id="home.header.button.buyNow" />
                </p>
              </button>
            </div>
          </div>
        </div>
        { !mobile && <NavBob className="header__nav-down--container" height={height} />}
      </div>
    </div>
  );
}
const { bool, number } = PropTypes;
Header.propTypes = {
  mobile: bool,
  height: number,
};
Header.defaultProps = {
  mobile: false,
  height: 0,
};
export default Header;
