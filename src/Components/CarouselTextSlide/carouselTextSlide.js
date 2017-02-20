import React, { PropTypes } from 'react';

const propTypes = {
  maxWidth: PropTypes.string,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
function ReviewSlide({ maxWidth, className, name, review, author }) {
  return (
    <div className={`${className}-${name}`} style={{ maxWidth }}>
      <div className={`${className}-${name}-review`}>
        <div className={`${className}-${name}-review-body`}>
          <p className={`${className}-${name}-review-body-quotes`}>
            {'\u2018\u2018'}
          </p>
          <p className={`${className}-${name}-review-body-main`}>
            {review}
          </p>
          <p className={`${className}-${name}-review-body-quotes`}>
            {'\u2019\u2019'}
          </p>
        </div>
        <div className={`${className}-${name}-author-body`}>
          <p className={`${className}-${name}-author-body-dash`}>
            {'-'}
          </p>
          <p className={`${className}-${name}-author-body-main`}>
            {author}
          </p>
        </div>
      </div>
    </div>
  );
}

ReviewSlide.propTypes = propTypes;
export default ReviewSlide;

/* NOTE
1. className example = "homepage-how-carousel"
2. name exmaple = "couple"
 - Result = homepage-how-carousel-couple
*/
