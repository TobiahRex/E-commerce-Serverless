import React from 'react';

function ReviewSlide({ maxWidth, className, review, author }) {
  return (
    <div className={`${className}`} style={{ maxWidth }}>
      <div className={`${className}__review`}>
        <div className="review__body">
          <p className="body__quotes">
            {'\u2018\u2018'}
          </p>
          <p className="body__main">
            {review}
          </p>
          <p className="body__quotes" >
            {'\u2019\u2019'}
          </p>
        </div>
        <div className="review__author">
          <p className="author__dash">
            {'-'}
          </p>
          <p className="author__main">
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
