import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { lifecycle } from 'recompose';
import './assets/styles/style.css';

function CcForm({ children }) {
  return (
    <div className="credit-card__info-container-form">
      {children}
    </div>
  );
}
const CcFormWithLifecycle = lifecycle({
  shouldComponentUpdate(nextProps) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;
    return false;
  },
})(CcForm);

const { arrayOf, object } = PropTypes;
CcForm.propTypes = {
  children: arrayOf(object).isRequired,
};
export default CcFormWithLifecycle;
