import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';

const FooterListItem = ({ section, link, intlId }) => (
  <li className={`${section}__list-item ${section}__list-item--landscape ${section}__list-item--tablet`}>
    <a
      className={`${section}__list--link hover-bob`}
      data-ix="new-interaction"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <IntlMsg id={intlId} />
    </a>
  </li>
);

FooterListItem.propTypes = {
  section: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  intlId: PropTypes.string.isRequired,
};

export default FooterListItem;
