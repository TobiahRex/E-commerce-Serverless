import React from 'react';
import PropTypes from 'prop-types';

class ProductReviewComments extends React.PureComponent {

  handleOnChange = e => this.props.handleOnChange(e);

  render() {
    return (
      <div className="checkout__comments">
        <textarea
          name="prComments"
          cols="40"
          rows="5"
          placeholder="Comments..."
          value={this.props.comments}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}
const { string, func } = PropTypes;

ProductReviewComments.propTypes = {
  comments: string,
  handleOnChange: func.isRequired,
};
ProductReviewComments.defaultProps = {
  comments: '',
};
export default ProductReviewComments;
