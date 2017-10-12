import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { lifecycle } from 'recompose';

function NameOnCard({
  ccNameOnCard,
  handleOnChange,
}) {
  return (
    <div className="input__row" >
      <div className="input__row--name-on-card">
        <p>
          <IntlMsg id="checkout.credit-card.name-on-card" />&nbsp;
          <span className="required">*</span>
        </p>
        <Validation.components.Input
          errorClassName="is-invalid-input"
          type="text"
          containerClassName=""
          name="ccNameOnCard"
          validations={['required', 'ccName', 'ccName-firstLast']}
          onChange={handleOnChange}
          value={ccNameOnCard}
        />
      </div>
    </div>
  );
}
const NameOnCardWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;
    return false;
  },
})(NameOnCard);

const { func, string } = PropTypes;
NameOnCard.propTypes = {
  ccNameOnCard: string.isRequired,
  handleOnChange: func.isRequired,
};
export default NameOnCardWithLifecycle;
