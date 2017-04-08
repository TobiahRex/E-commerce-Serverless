import React, { PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import Scroll from 'react-scroll';

const propTypes = {
  height: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};

function NavBob({ height, className }) {
  const scroll = Scroll.animateScroll;
  return (<div className={`${className} hover-bob-active`}>
    <button
      className="navBob__button"
      onClick={() => scroll.scrollTo(height, {
        duration: 1500,
        delay: 100,
        smooth: 'easeInOutQuint',
      })}
    >
      <FontAwesome
        className="button__icon"
        name="angle-double-down"
        size="5x"
      />
    </button>
  </div>
  );
}

NavBob.propTypes = propTypes;
export default NavBob;
