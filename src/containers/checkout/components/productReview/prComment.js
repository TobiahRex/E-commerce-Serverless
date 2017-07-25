import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProductReviewComments extends PureComponent() {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    };
  }

  handleChange = e => this.setState({ comment: e.target.value });

  render() {
    return (
      <div className="checkout__comments">
        <textarea
          name="prComment"
          cols="40"
          rows="5"
          value={this.props.comment}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

ProductReviewComments.propTypes = {
  comment: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  submitPrComment: PropTypes.func.isRequired,
};
ProductReviewComments.defaultProps = {
  comment: '',
};

export default ProductReviewComments;
