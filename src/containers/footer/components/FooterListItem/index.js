import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const FooterListItem = ({ title }) => (
  <li className="general__list-item general__list-item--landscape general__list-item--tablet">
    <a
      className="general__list--link hover-bob"
      data-ix="new-interaction"
      href="/about"
      rel="noopener noreferrer"
      target="_blank"
    >
      <IntlMsg id={title} />
    </a>
  </li>
);

FooterListItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FooterListItem;
