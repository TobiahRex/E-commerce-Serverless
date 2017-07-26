import React from 'react';
import PropTypes from 'prop-types';

function SameAsBilling({ handleSameAsBilling, sameAsBilling }) {
  return (
    <div className="input__row">
      <div className="input__row--same-as-billing">
        <input
          type="checkbox"
          onChange={handleSameAsBilling}
          checked={sameAsBilling}
        />
        <p>Use same address for shipping.<span className="required">*</span></p>
      </div>
    </div>
  );
}
SameAsBilling.propTypes = {
  sameAsBilling: PropTypes.bool.isRequired,
  handleSameAsBilling: PropTypes.func.isRequired,
};

export default SameAsBilling;
