import React from 'react';
import FontAwesome from 'react-fontawesome';

import {
  WebflowJs,
  contentData,
} from './assets/utils';

import {
  MemberCard,
} from '../../components';

const AboutMembers = () => {
  WebflowJs(); //eslint-disable-line

  const renderHelper = data =>
  data.map((dataObj) => {
    if (dataObj.component === 'MemberCard') {
      return (
        <MemberCard
          {...dataObj.props}
          key={new Buffer(`${dataObj.props.CardImg.src + Date.now()}`, 'utf8').toString('base64')}
        />
      );
    }
    return '';
  });


  return (
    <div>
      <div className="about-container about-container__staff w-container">
        {renderHelper(contentData.english)}

        <MemberCard />
        <div className="about-container__staff">
          <img className="about-container__staff staff--image" role="presentation" src="images/toby-2-264x200.png" />
          <div className="about-container__staff staff--content">
            <h3 className="content--heading staff__content">Tobiah Rex
            </h3>
            <h4 className="content--sub-heading staff__content">CTO, COO, Co-founder
            </h4>
            <p className="about-container__staff staff--bio-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="about-container__staff staff--social-media">
            <div className="staff__social-media">
              <a className="social-media--link staff__social-media" href="#">
                <FontAwesome name="facebook" />
              </a>

            </div>
            <div className="staff__social-media">
              <a className="social-media--link staff__social-media" href="#">
                <FontAwesome name="linkedin" />
              </a>
            </div>
            <div className="staff__social-media">
              <a className="social-media--link staff__social-media" href="#">
                <FontAwesome name="twitter" />
              </a>
            </div>
            <div className="staff__social-media">
              <a className="social-media--link staff__social-media" href="#">
                <FontAwesome name="instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="about-container__staff">
          <img className="about-container__staff staff--image" role="presentation" src="images/ID3-264x200.png" />
          <div className="about-container__staff staff--content">
            <h3 className="content--heading staff__content">Lakshman Diwaakar
            </h3>
            <h4 className="content--sub-heading staff__content">CDE
            </h4>
            <p className="about-container__staff staff--bio-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="about-container__staff staff--social-media">
            <div className="staff__social-media">
              <a className="social-media--link staff__social-media" href="#">
                <FontAwesome name="facebook" />
              </a>

            </div>
            <div className="staff__social-media">
              <a className="social-media--link staff__social-media" href="#">
                <FontAwesome name="linkedin" />
              </a>
            </div>
            <div className="staff__social-media">
              <a className="social-media--link staff__social-media" href="#">
                <FontAwesome name="twitter" />
              </a>
            </div>
            <div className="staff__social-media">
              <a className="social-media--link staff__social-media" href="#">
                <FontAwesome name="instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="about-container__staff">
          <img className="about-container__staff staff--image" role="presentation" src="images/phil-264x200.png" />
          <div className="about-container__staff staff--content">
            <h3 className="content--heading staff__content">Phil Moore
            </h3>
            <h4 className="content--sub-heading staff__content">Head of Design
            </h4>
            <p className="about-container__staff staff--bio-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="about-container__staff staff--social-media">
            <div className="staff__social-media">
              <a className="social-media--link staff__social-media" href="#">
                <FontAwesome name="facebook" />
              </a>

            </div>
            <div className="staff__social-media">
              <a className="social-media--link staff__social-media" href="#">
                <FontAwesome name="linkedin" />
              </a>
            </div>
            <div className="staff__social-media">
              <a className="social-media--link staff__social-media" href="#">
                <FontAwesome name="twitter" />
              </a>
            </div>
            <div className="staff__social-media">
              <a className="social-media--link staff__social-media" href="#">
                <FontAwesome name="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutMembers;
