import React from 'react';
import PropTypes from 'prop-types';
import { NavbarNavHdr } from './components';

function NavbarNavs({
  renderKey,
  reRenderNavbar,
}) {
  console.log('%crenderKey', 'background:red;', renderKey);
  return (
    <div className="action-section__navbar-action-bottom">
      <div className="navbar-action-bottom__nav-container" key={renderKey}>
        <NavbarNavHdr
          ix="nav-b-juice-hover"
          link="/juices"
          header="navbar.nav.juices.title"
          wid="0a1bcd4d-ed7f-4373-8f05-a846e358d69d"
          reRenderNavbar={reRenderNavbar}
        />
        <NavbarNavHdr
          header="navbar.nav.media.title"
          ix="nav-b-media-hover"
          wid="76bb03a9-66f7-5ff2-1465-07ac802931b3"
          reRenderNavbar={reRenderNavbar}
        />
        <NavbarNavHdr
          header="navbar.nav.info.title"
          ix="nav-b-info-hover"
          wid="3748d4fe-e6de-c11e-bea8-e9bca070b253"
          reRenderNavbar={reRenderNavbar}
        />
      </div>
    </div>
  );
}
const { string, func } = PropTypes;
NavbarNavs.propTypes = {
  renderKey: string.isRequired,
  reRenderNavbar: func.isRequired,
};
export default NavbarNavs;
