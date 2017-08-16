import React from 'react';
import PropTypes from 'prop-types';

class ProductReviewComments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: props.comment,
    };
  }

  handleChange = e => this.setState({ comment: e.target.value });

  render() {
    return (
      <div className="checkout__comments">
        <textarea
          name="prComments"
          cols="40"
          rows="5"
          placeholder="Comments..."
          value={this.state.comment}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}
const { string, func } = PropTypes;

ProductReviewComments.propTypes = {
  comment: string.isRequired,
  handleOnChange: func.isRequired,
};
export default ProductReviewComments;
