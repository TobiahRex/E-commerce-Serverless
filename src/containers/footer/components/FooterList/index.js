import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import {
  FooterListItem,
} from '../';

const FooterList = ({ section, titles }) => (
  <ul className={`${section}-column__list ${section}-column__list--landscape ${section}-column__list--tablet w-list-unstyled`}>
    
    <FooterListItem title="home.footer.general.aboutUs" />

    <li className="general__list-item general__list-item--landscape general__list-item--tablet">
      <a
        className="general__list--link hover-bob"
        data-ix="new-interaction"
        href="/about"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IntlMsg id="home.footer.general.contactUs" />
      </a>
    </li>
    <li className="general__list-item general__list-item--landscape general__list-item--tablet">
      <a
        className="general__list--link hover-bob"
        data-ix="new-interaction"
        href="/about"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IntlMsg id="home.footer.general.vapeNews" />
      </a>
    </li>
    <li className="general__list-item general__list-item--landscape general__list-item--tablet">
      <a
        className="general__list--link hover-bob"
        data-ix="new-interaction"
        href="/about"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IntlMsg id="home.footer.general.productReviews" />
      </a>
    </li>
    <li className="general__list-item general__list-item--landscape general__list-item--tablet">
      <a
        className="general__list--link hover-bob"
        data-ix="new-interaction"
        href="/about"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IntlMsg id="home.footer.general.userStories" />
      </a>
    </li>
  </ul>
);

FooterList.propTypes = {
  section: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FooterList;
