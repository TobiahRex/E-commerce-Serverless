import React from 'react';
import PropTypes from 'prop-types';

const { string, objectOf, func } = PropTypes;

const defaultProps = {
  onNext: null,
  onPrevious: null,
};

const propTypes = {
  className: string.isRequired,
  name: string.isRequired,
  onNext: func,
  onPrevious: func,
  show: objectOf(string).isRequired,
};

function CarouselNav({
  className,
  name,
  onNext,
  onPrevious,
  show,
}) {
  function handleClick(event) {
    event.preventDefault();
    const button = event.target.getAttribute('id');

    if (button === 'left') onPrevious();
    if (button === 'right') onNext();
  }

  return (
    <a
      style={show}
      href=""
      id={name}
      onClick={handleClick}
      className={`${className}-${name}-arrow ping-nav`}
    >{''}</a>
  );
}

CarouselNav.defaultProps = defaultProps;
CarouselNav.propTypes = propTypes;
export default CarouselNav;

/* NOTE
1. className example = "homepage-how-carousel"
2. name exmaple = "couple"
 - Result = homepage-how-carousel-couple
*/
