import React from 'react';
import { Link } from 'react-router';
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
import './assets/styles/style.css';

function Faqs({ intl }) {
  WebflowJs();
  WebflowAnimations();
  const {
    messages: {
      'legal.faqs.header.title': header,
      'legal.faqs.breadCrumb.paths1': bcPaths1,
      'legal.faqs.breadCrumb.lastCrumb': lastCrumb,
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
                <IntlMsg id="legal.faqs.5.body.1" />&nbsp;
                <Link className="blurb-text__link2" to="/contact_us">
                  <IntlMsg id="legal.faqs.5.body.2" />&nbsp;
                </Link>
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
