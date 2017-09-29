import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Scroll from 'react-scroll';
import './assets/styles/style.css';

const scroll = Scroll.animateScroll;
const { number, string } = PropTypes;
const propTypes = {
  height: number.isRequired,
  className: string.isRequired,
};

function NavBob({ height, className }) {
  return (
    <div className={`${className}`}>
      <button
        className="navBob__button hover-bob-active"
        onClick={() => scroll.scrollTo(height, {
          duration: 1500,
          delay: 100,
          smooth: 'easeInOutQuint',
        })}
      >
        <FontAwesome
          className="button__icon"
          name="angle-down"
          size="3x"
        />
      </button>
    </div>
  );
}

NavBob.propTypes = propTypes;
export default NavBob;
