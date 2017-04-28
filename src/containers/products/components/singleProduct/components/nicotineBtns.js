import React from 'react';
import PropTypes from 'prop-types';

function NicotineBtns({ nicStrength, nicotineHandler }) {
  const style = {
    active: {
      backgroundColor: '#063A7A',
    },
    inactive: {
      backgroundColor: '#FC2525',
    },
  };
  const nicotineStrengths = [2, 4, 6, 8];
  return (
    <div className="desc__nicotine">
      <h3>Nicotine Strength</h3>
      <ul className="nicotine__list">
        {
          nicotineStrengths.map(strength => (
            <li
              key={new Buffer(strength).toString('base64')}
              className="list--strength"
              style={strength === nicStrength ? style.active : style.inactive}
            >
              <button
                data-tag={strength}
                className="strength__btn" onClick={nicotineHandler}
              >{`${strength}mg`}</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
const { func, number } = PropTypes;
NicotineBtns.propTypes = {
  nicotineHandler: func.isRequired,
  nicStrength: number.isRequired,
};
export default NicotineBtns;
