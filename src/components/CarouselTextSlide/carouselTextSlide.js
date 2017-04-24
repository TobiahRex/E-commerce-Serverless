import React from 'react';

function ReviewSlide({ maxWidth, className, review, author }) {
  return (
    <div className={`${className}`} style={{ maxWidth }}>
      <div className={`${className}-review`}>
        <div className={`${className}-review-body`}>
          <p className={`${className}-review-body-quotes`}>
            {'\u2018\u2018'}
          </p>
          <p className={`${className}-review-body-main`}>
            {review}
          </p>
          <p className={`${className}-review-body-quotes`}>
            {'\u2019\u2019'}
          </p>
        </div>
        <div className={`${className}-author-body`}>
          <p className={`${className}-author-body-dash`}>
            {'-'}
          </p>
          <p className={`${className}-author-body-main`}>
            {author}
          </p>
        </div>
      </div>
    </div>
  );
}
const { string } = React.PropTypes;
ReviewSlide.propTypes = {
  maxWidth: string,
  className: string.isRequired,
  review: string.isRequired,
  author: string.isRequired,
};
ReviewSlide.defaultProps = {
  maxWidth: '100%',
};
export default ReviewSlide;
