import React, { PureComponent } from 'react';

class ProductReviewComments extends PureComponent {
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
          placeholder="Comments..."
          value={this.state.comment}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ProductReviewComments;
