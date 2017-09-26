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

function Faqs({ intl }) {
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
              <h4 className="question-container__blurb-text" data-ix="slide-from-left">Why can’t I buy more than 4 bottles?</h4>
            </div>
            <div className="faq-content__answer-container">
              <p className="answer-container__blurb-text" data-ix="hdr-slide-from-right">Japanese law requires no more than 120 mililiters of nicotine juice to be sold to individual, per address, within 1 month.</p>
            </div>
          </div>
          <div className="content-container__faq-content">
            <div className="faq-content__question-container">
              <h4 className="question-container__blurb-text" data-ix="slide-from-left">What address should I use if I’m SOFA and live on a military base?</h4>
            </div>
            <div className="faq-content__answer-container">
              <p className="answer-container__blurb-text" data-ix="hdr-slide-from-right">Many of our SOFA sponsored members use friends addresses who live off base.&nbsp; Alternatively, every building (including the on base post office) has a Japanese address on military bases in&nbsp;Japan.&nbsp; We recommend you ask your post office for their Japanese (“off-base”) address and&nbsp;then you can use your postal box # to have the package assigned to your postal box and&nbsp;receive your juice.</p>
            </div>
          </div>
          <div className="content-container__faq-content">
            <div className="faq-content__question-container">
              <h4 className="question-container__blurb-text" data-ix="slide-from-left">When will you get more flavors?</h4>
            </div>
            <div className="faq-content__answer-container">
              <p className="answer-container__blurb-text" data-ix="hdr-slide-from-right">Our flavor inventory will be expanding in the coming months.&nbsp; We’ve currently partnered with VapeSwitch @&nbsp;<a className="blurb-text__link">http://www.vapeswitch.com</a>&nbsp;and offer their 6 delicious falvors as we launch our&nbsp;business. Their juices are made at the #1 ranked e-juice factory in the World at Molecule Labs. We’re supremely confident you will find these 6 flavors totally addicting. Stay tuned fornewletter updates for future additional e-juices.</p>
            </div>
          </div>
          <div className="content-container__faq-content">
            <div className="faq-content__question-container">
              <h4 className="question-container__blurb-text" data-ix="slide-from-left">Why do you only sell vape juice and not all vape equipment &amp; accessories?</h4>
            </div>
            <div className="faq-content__answer-container">
              <p className="answer-container__blurb-text" data-ix="hdr-slide-from-right">We specialize in delivering nicotine vape juice to Japan faster than ANY competition in Japan. We’re highly committed and devoted to performing this highly rare and difficult task to the best of our ability and therefore devote 100 % of our resources and attention to that. We recommend purchasing all your vaping gear and needed accessories at our partners’ website:&nbsp;<a className="blurb-text__link">http://www.vapeswitch.com</a></p>
            </div>
          </div>
          <div className="content-container__faq-content">
            <div className="faq-content__question-container">
              <h4 className="question-container__blurb-text" data-ix="slide-from-left">How do I Delete my account?</h4>
            </div>
            <div className="faq-content__answer-container">
              <p className="answer-container__blurb-text" data-ix="hdr-slide-from-right">Morbi consequat mauris in ornare ornare. Phasellus iaculis quam nec iaculis lacinia. Quisque et lacus vestibulum dui suscipit posuere ut a enim. Nulla sit amet tortor convallis, porta urna a, porttitor ante. Nullam dui tortor, tempor nec congue et, finibus at sem. Nulla facilisi. Cras interdum lacinia quam id feugiat.</p>
            </div>
          </div>
          <div className="content-container__faq-content">
            <div className="faq-content__question-container">
              <h4 className="question-container__blurb-text" data-ix="slide-from-left">Where do I access my User Information?</h4>
            </div>
            <div className="faq-content__answer-container">
              <p className="answer-container__blurb-text" data-ix="hdr-slide-from-right">Aliquam sed orci eu leo porta lacinia. Sed sed lacinia nisl. In commodo eros erat, porta vulputate lacus varius vitae. Morbi mollis, arcu ac pharetra pharetra, metus massa molestie tortor, id pharetra quam urna sed nunc. Mauris sed dolor sit amet est ornare finibus. Sed quis scelerisque lacus. Pellentesque et mi porta, consectetur felis volutpat, hendrerit ipsum. Fusce tincidunt orci in erat efficitur, et elementum velit faucibus. Aliquam pulvinar dui sit amet mauris mollis, et facilisis ex vehicula. Fusce varius lectus nunc, quis suscipit sapien vehicula sed. Sed efficitur suscipit erat, maximus consectetur lectus tempus eget. Cras a mollis felis.</p>
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
