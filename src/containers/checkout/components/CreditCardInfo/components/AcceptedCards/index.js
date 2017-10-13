import React from 'react';
import FontAwesome from 'react-fontawesome';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.css';

export default function AcceptedCards() {
  return (
    <div className="credit-card__cc-type">
      <div className="cc-type__blurb">
        <IntlMsg id="checkout.credit-card.accepted" />
      </div>
      <div className="cc-type__card-logos">
        <div className="card-logos__fa-blurb">
          <FontAwesome name="cc-visa" />
        </div>
        <div className="card-logos__fa-blurb">
          <FontAwesome name="cc-mastercard" />
        </div>
        <div className="card-logos__fa-blurb">
          <FontAwesome name="cc-discover" />
        </div>
        <div className="card-logos__fa-blurb">
          <FontAwesome name="cc-jcb" />
        </div>
        <div className="card-logos__fa-blurb">
          <FontAwesome name="cc-amex" />
        </div>
      </div>
    </div>
  );
}
