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
import {
  WebflowJs,
  WebflowAnimations,
} from './assets/utils';

function Faqs({ intl }) {
  WebflowJs();
  WebflowAnimations();
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
      <div className="faq-body">
        <div className="faq-body__hdr-container">
          <h1 className="hdr-container__hdr-text" data-ix="hdr-slide-from-top">{'FAQ\'s'}</h1>
        </div>
        <div className="faq-body__content-container">
          <div className="content-container__faq-content">
            <div className="faq-content__question-container">
              <h4 className="question-container__blurb-text" data-ix="slide-from-left">
                <IntlMsg id="legal.faqs.1.header" />
              </h4>
            </div>
            <div className="faq-content__answer-container">
              <p className="answer-container__blurb-text" data-ix="hdr-slide-from-right">
                <IntlMsg id="legal.faqs.1.body" />
              </p>
            </div>
          </div>
          <div className="content-container__faq-content">
            <div className="faq-content__question-container">
              <h4 className="question-container__blurb-text" data-ix="slide-from-left">
                <IntlMsg id="legal.faqs.2.header" />
              </h4>
            </div>
            <div className="faq-content__answer-container">
              <p className="answer-container__blurb-text" data-ix="hdr-slide-from-right">
                <IntlMsg id="legal.faqs.2.body" />
              </p>
            </div>
          </div>
          <div className="content-container__faq-content">
            <div className="faq-content__question-container">
              <h4 className="question-container__blurb-text" data-ix="slide-from-left">
                <IntlMsg id="legal.faqs.3.header" />
              </h4>
            </div>
            <div className="faq-content__answer-container">
              <p className="answer-container__blurb-text" data-ix="hdr-slide-from-right">
                <IntlMsg id="legal.faqs.3.body.1" />
                &nbsp;
                <a className="blurb-text__link">
                  <IntlMsg id="legal.faqs.3.body.2" />
                </a>
                &nbsp;
                <IntlMsg id="legal.faqs.3.body.3" />
              </p>
            </div>
          </div>
          <div className="content-container__faq-content">
            <div className="faq-content__question-container">
              <h4 className="question-container__blurb-text" data-ix="slide-from-left">
                <IntlMsg id="legal.faqs.4.header" />
              </h4>
            </div>
            <div className="faq-content__answer-container">
              <p className="answer-container__blurb-text" data-ix="hdr-slide-from-right">
                <IntlMsg id="legal.faqs.4.body.1" />
                &nbsp;
                <a className="blurb-text__link">
                  <IntlMsg id="legal.faqs.4.body.2" />
                </a>
              </p>
            </div>
          </div>
          <div className="content-container__faq-content">
            <div className="faq-content__question-container">
              <h4 className="question-container__blurb-text" data-ix="slide-from-left">
                <IntlMsg id="legal.faqs.5.header" />
              </h4>
            </div>
            <div className="faq-content__answer-container">
              <p className="answer-container__blurb-text" data-ix="hdr-slide-from-right">
                <IntlMsg id="legal.faqs.5.body.1" />&nbps;
                <a className="blurb-text__link" href="/contact_us">
                  <IntlMsg id="legal.faqs.5.body.2" />&nbps;
                </a>
                <IntlMsg id="legal.faqs.5.body.3" />
              </p>
            </div>
          </div>
          <div className="content-container__faq-content">
            <div className="faq-content__question-container">
              <h4 className="question-container__blurb-text" data-ix="slide-from-left">
                <IntlMsg id="legal.faqs.6.header" />
              </h4>
            </div>
            <div className="faq-content__answer-container">
              <p className="answer-container__blurb-text" data-ix="hdr-slide-from-right">
                <IntlMsg id="legal.faqs.6.body" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Faqs.propTypes = {
  intl: intlShape.isRequired,
};
const FaqsWithIntl = injectIntl(Faqs);
export default (FaqsWithIntl);
