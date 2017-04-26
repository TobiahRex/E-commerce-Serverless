import React from 'react';

export default function Promotion({ loggedIn, modalHandler }) {
  let style;
  if (!loggedIn) {
    style = { display: 'flex' };
  } else {
    style = { display: 'none' };
  }
  return (
    <div className="desc__promotion" style={style}>
      <button
        data-parent="promotion-register"
        data-tag=""
        className="sweep-right"
        onClick={modalHandler}
      >New members get 10% off their first order</button>
    </div>
  );
}
const { bool, func } = React.PropTypes;
Promotion.propTypes = {
  loggedIn: bool.isRequired,
  modalHandler: func.isRequired,
};
