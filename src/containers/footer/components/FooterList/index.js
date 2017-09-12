import React from 'react';
import PropTypes from 'prop-types';
import { withHandlers } from 'recompose';
import { FooterListItem } from '../';

const FooterList = ({ renderHelper, section }) => (
  <ul className={`${section}-column__list ${section}-column__list--landscape ${section}-column__list--tablet w-list-unstyled`}>
    {renderHelper()}
  </ul>
);
const { func, string } = PropTypes;
FooterList.propTypes = {
  section: string.isRequired,
  items: string.isRequired,
  renderHelper: func.isRequired,
};

const FooterListWithHandler = withHandlers({
  renderHelper: ({ section, items }) => () =>
    items.map(item => (
      <FooterListItem
        key={new Buffer(item, 'utf8').toString('base64')}
        section={section}
        link={item.link}
        intlId={item.intlId}
      />
    )),
})(FooterList);

export default FooterListWithHandler;
