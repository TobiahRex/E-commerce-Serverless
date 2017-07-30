import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Validation from 'react-validation';

const { func, string } = PropTypes;

class NameOnCard extends React.PureComponent {
  static propTypes = {
    ccNameOnCard: string.isRequired,
    handleOnChange: func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      ccNameOnCard: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    const nextPropsCopy = Object.assign({}, nextProps);
    delete nextPropsCopy.handleOnChange;
    if (!_.isEqual(nextProps, this.props)) this.setState({ ...nextPropsCopy });
  }

  handleOnChange = e => this.props.handleOnChange(e)

  render() {
    return (
      <div className="input__row">
        <div className="input__row--name-on-card">
          <p>Name on Card <span className="required">*</span></p>
          <Validation.components.Input
            errorClassName="is-invalid-input"
            type="text"
            containerClassName=""
            name="ccNameOnCard"
            validations={['required', 'ccName']}
            onChange={this.handleOnChange}
            value={this.state.ccNameOnCard}
          />
        </div>
      </div>
    );
  }
}
export default NameOnCard;
