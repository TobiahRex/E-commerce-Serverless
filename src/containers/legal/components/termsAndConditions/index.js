import React from 'react';
import {
  injectIntl,
  intlShape,
  FormattedMessage as IntlMsg,
} from 'react-intl';
import {
  BreadCrumb,
  HdrPage,
} from './components';

function TermsAndConditions({ intl }) {
  const {
    messages: {
      'legal.policy.terms.breadCrumb.paths1': bcPaths1,
      'legal.policy.terms.breadCrumb.lastCrumb': lastCrumb,
      'legal.policy.terms.header.title': header,
    },
  } = intl;

  return (
    <div className="terms-and-conditions__main">
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
          <IntlMsg id="legal.policy.terms.header.desc" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.terms.restrictions.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.terms.restrictions.desc" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.terms.disclaimer.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.terms.disclaimer.desc" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.terms.links.title" />
        </h4>
        <br />
        <p>
          <IntlMsg id="legal.policy.terms.links.desc" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="" />
        </h4>
        <br />
        <br />
        <p>
          <IntlMsg id="legal.policy.terms.submissions.desc" />
        </p>
        <br />
        <br />
        <h4>
          <IntlMsg id="legal.policy.terms.termination.title" />
        </h4>
        <br />
        <IntlMsg id="" />
      </div>
    </div>
  );
}
TermsAndConditions.propTypes = {
  intl: intlShape.isRequired,
};
const TermsAndConditionsWithIntl = injectIntl(TermsAndConditions);
export default TermsAndConditionsWithIntl;
