import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage as IntlMsg } from 'react-intl';
import { withHandlers } from 'recompose';

import {
  FooterListItem,
} from '../';

const FooterList = ({ section, titles }) => (
  <ul className={`${section}-column__list ${section}-column__list--landscape ${section}-column__list--tablet w-list-unstyled`}>

    <FooterListItem section={section} title="home.footer.general.aboutUs" />

    <li className={`${section}__list-item ${section}__list-item--landscape ${section}__list-item--tablet`}>
      <a
        className={`${section}__list--link hover-bob`}
        data-ix="new-interaction"
        href="/about"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IntlMsg id="home.footer.general.contactUs" />
      </a>
    </li>
    <li className={`${section}__list-item ${section}__list-item--landscape ${section}__list-item--tablet`}>
      <a
        className={`${section}__list--link hover-bob`}
        data-ix="new-interaction"
        href="/about"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IntlMsg id="home.footer.general.vapeNews" />
      </a>
    </li>
    <li className={`${section}__list-item ${section}__list-item--landscape ${section}__list-item--tablet`}>
      <a
        className={`${section}__list--link hover-bob`}
        data-ix="new-interaction"
        href="/about"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IntlMsg id="home.footer.general.productReviews" />
      </a>
    </li>
    <li className={`${section}__list-item ${section}__list-item--landscape ${section}__list-item--tablet`}>
      <a
        className={`${section}__list--link hover-bob`}
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

const FooterListWithHandler = withHandlers({
  renderHelper: ({ section, titles }) => () =>
    titles.map(title => (
      <FooterListItem
        key={new Buffer(title, 'utf8').toString('base64')}
        section={section}
        title={title}
      />
    )),
})(FooterList);

export default FooterListWithHandler;
