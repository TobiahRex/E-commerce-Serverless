import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Validation from 'react-validation';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function NameOnCard({
  ccNameOnCard,
  handleOnChange,
}) {
  return (
    <div className="card-name-section__container">
      <label className="form__label" htmlFor="cardName">
        <IntlMsg id="checkout.credit-card.name-on-card" />&nbsp;
        <em className="label__asterisk">*</em>
      </label>
      <Validation.components.Input
        id="cardName"
        errorClassName="form__error-blurb"
        type="text"
        containerClassName="container__text-field"
        name="ccNameOnCard"
        validations={['required', 'ccName', 'ccName-firstLast']}
        onChange={handleOnChange}
        value={ccNameOnCard}
      />
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
