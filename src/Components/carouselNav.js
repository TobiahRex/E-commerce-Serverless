import React, { PropTypes } from 'react';

const propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  show: PropTypes.objectOf(PropTypes.string.isRequired),
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
      className={`${className}-${name}-arrow`}
    >{''}</a>
  );
}

CarouselNav.propTypes = propTypes;
export default CarouselNav;

/* NOTE
1. className example = "homepage-how-carousel"
2. name exmaple = "couple"
 - Result = homepage-how-carousel-couple
*/
