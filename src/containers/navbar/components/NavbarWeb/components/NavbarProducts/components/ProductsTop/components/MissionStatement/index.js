import React from 'react';
import { FormattedMessage as IntlMsg } from 'react-intl';

export default function MissionStatement() {
  return (
    <div className="top-section__juice-blurb">
      <p className="paragraph">
        <IntlMsg id="navbar.nav.juices.description" />
      </p>
    </div>
  );
}
