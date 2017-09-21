import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import convertStrengthToNumber from '../../../../../services/utils/convertStrengthToNumber';

function NicotineBtns({
  chosenStrength,
  nicotineStrengths,
  nicotineHandler,
}) {
  const style = {
    active: {
      backgroundColor: '#063A7A',
    },
    inactive: {
      backgroundColor: '#FC2525',
    },
  };
  nicotineStrengths = convertStrengthToNumber(nicotineStrengths);

  return (
    <div className="desc__nicotine">
      <h3>
        <IntlMsg id="product.single.nicotine.title" />
      </h3>
      <ul className="nicotine__list">
        {
          nicotineStrengths.map(({ _id, nicotineStrength }) => (
            <li
              key={_id}
              className="list--strength"
              style={
                nicotineStrength === chosenStrength ?
                style.active : style.inactive
              }
            >
              <button
                data-nicotinestrength={nicotineStrength}
                data-product={_id}
                className="strength__btn"
                onClick={nicotineHandler}
              >{`${nicotineStrength}mg`}</button>

            </li>
          ))
        }
      </ul>
    </div>
  );
}
const { func, number, arrayOf, string, shape } = PropTypes;
NicotineBtns.propTypes = {
  chosenStrength: number.isRequired,
  nicotineHandler: func.isRequired,
  nicotineStrengths: arrayOf(shape({
    _id: string,
    nicotineStrength: string,
  })).isRequired,
};
export default NicotineBtns;
