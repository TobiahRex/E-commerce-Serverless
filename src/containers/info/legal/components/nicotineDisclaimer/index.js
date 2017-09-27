import React from 'react';
import { lifecycle } from 'recompose';
import {
  intlShape,
  injectIntl,
  FormattedMessage as IntlMsg,
} from 'react-intl';
import {
  BreadCrumb,
  HdrPage,
} from './components';
import {
  WebflowAnimations,
} from './assets/utils/';
import './assets/styles/style.css';

function NicotineDisclaimer({ intl }) {
  const {
    messages: {
      'legal.policy.nicotine.breadCrumb.paths1': bcPaths1,
      'legal.policy.nicotine.breadCrumb.lastCrumb': lastCrumb,
      'legal.policy.nicotine.header.title': header,
    },
  } = intl;

  return (
    <div className="nicotine-disclamer">
      <BreadCrumb
        paths={[bcPaths1]}
        classes={['home']}
        destination={['']}
        lastCrumb={lastCrumb}
      />
      <HdrPage header={header} />
      <br />
      <div className="nicotine-disclamer__content-container">
        <div className="content-container__shipping-content">
          <div className="shipping-content__blurb-container">
            <p className="blurb-container__blurb-text" data-ix="slide-from-right">
              <span className="required">
                <IntlMsg id="legal.policy.nicotine.header.desc1" />
              </span>
              <IntlMsg id="legal.policy.nicotine.header.desc2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
NicotineDisclaimer.propTypes = {
  intl: intlShape.isRequired,
};
const NicotineDisclaimerWithIntl = injectIntl(NicotineDisclaimer);
const NicotineDisclaimerWithIntlAndLifecycle = lifecycle({
  componentDidUpdate() {
    WebflowAnimations();
  },
})(NicotineDisclaimerWithIntl);
export default (NicotineDisclaimerWithIntlAndLifecycle);
