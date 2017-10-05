import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function NewMemberPromotionBtn({ loggedIn, modalHandler }) {
  let style;

  if (!loggedIn) style = { display: 'flex' };
  else style = { display: 'none' };

  return (
    <div className="desc__promotion" style={style}>

      <button
        data-parent="promotion-register"
        data-tag=""
        className="sweep-right"
        onClick={modalHandler}
      ><IntlMsg id="product.single.register.promotion" /></button>

    </div>
  );
}
const { bool, func } = PropTypes;
NewMemberPromotionBtn.propTypes = {
  loggedIn: bool.isRequired,
  modalHandler: func.isRequired,
};
