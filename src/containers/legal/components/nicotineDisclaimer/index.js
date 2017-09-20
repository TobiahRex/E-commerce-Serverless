import React from 'react';
import {
  intlShape,
  injectIntl,
  FormattedMessage as IntlMsg,
} from 'react-intl';
import {
  BreadCrumb,
  HdrPage,
} from './components';

function NicotineDisclaimer({ intl }) {
  const {
    messages: {
      'legal.policy.nicotine.breadCrumb.paths1': bcPaths1,
      'legal.policy.nicotine.breadCrumb.lastCrumb': lastCrumb,
      'legal.policy.nicotine.header.title': header,
    },
  } = intl;

  return (
    <div className="nicotine-disclaimer__main">
      <BreadCrumb
        paths={[bcPaths1]}
        classes={['home']}
        destination={['']}
        lastCrumb={lastCrumb}
      />
      <HdrPage header={header} />
      <br />
      <div className="main__body">
        <p>
          <span className="required">
            <IntlMsg id="legal.policy.nicotine.header.desc1" />
          </span>
          <IntlMsg id="legal.policy.nicotine.header.desc2" />
        </p>
      </div>
    </div>
  );
}
NicotineDisclaimer.propTypes = {
  intl: intlShape.isRequired,
};
const NicotineDisclaimerWithIntl = injectIntl(NicotineDisclaimer);
export default (NicotineDisclaimerWithIntl)
