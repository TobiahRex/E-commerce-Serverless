import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';
import './assets/styles/style.css';
import {
  Amex,
  Discover,
  Jcb,
  MasterCard,
  Visa,
} from './components';

export default function AcceptedCards() {
  return (
    <div className="credit-card__cc-type">
      <div className="cc-type__blurb">
        <IntlMsg id="checkout.credit-card.accepted" />
      </div>
      <div className="cc-type__card-logos">
        <Visa />
        <MasterCard />
        <Discover />
        <Jcb />
        <Amex />
      </div>
    </div>
  );
}
