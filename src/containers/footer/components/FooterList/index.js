import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';

import {
  FooterListItem,
} from '../';

const FooterList = ({ renderHelper, section }) => (
  <ul className={`${section}-column__list ${section}-column__list--landscape ${section}-column__list--tablet w-list-unstyled`}>
    {renderHelper()}
  </ul>
);
const { func, string } = PropTypes;
FooterList.propTypes = {
  section: string.isRequired,
  title: string.isRequired,
  renderHelper: func.isRequired,
};

const FooterListWithHandler = withHandlers({
  renderHelper: ({ section, titles }) => () =>
    titles.map(title => (
      <FooterListItem
        key={new Buffer(title, 'utf8').toString('base64')}
        section={section}
        intlId={title}
      />
    )),
})(FooterList);

export default FooterListWithHandler;
