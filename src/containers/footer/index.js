import React from 'react';
import { propTypes } from './assets/propValidation';
import './assets/css/styles.css';
import {
  FooterHdr,
  FooterList,
  FooterLower,
  FooterColumn,
  FooterSocialGrid,
} from './components';
import { contentData } from './assets/utils';

class Footer extends React.Component {
  static propTypes = propTypes;

  constructor(props) {
    super(props);

    this.state = {
      x: '',
    };
  }

  renderHelper = data =>
    data.map((dataObj) => {  // eslint-disable-line
      if (dataObj.component === 'FooterList') {
        return (
          <FooterList
            key={new Buffer(dataObj.props.section, 'utf8').toString('base64')}
            section={dataObj.props.section}
            items={dataObj.props.items}
          />
        );
      }
    });

  render() {
    return (
      <div className="footer__container footer__container--landscape">
        <div className="footer__upper footer__upper--landscape">
          <div className="footer__upper--container footer__upper--container--landscape">
            <div className="footer__upper--grid footer__upper--grid--landscape w-row">
              <FooterColumn section="general">
                <FooterHdr
                  section="general"
                  title="home.footer.general.title"
                />
                {this.renderHelper(contentData[0])}
              </FooterColumn>
              <FooterColumn section="customer" >
                <FooterHdr
                  section="customer"
                  title="home.footer.customer.title"
                />
                {this.renderHelper(contentData[1])}
              </FooterColumn>

              <FooterColumn section="contact">

                <FooterHdr section="contact" title="home.footer.contact.title" />

                {this.renderHelper(contentData[2])}
              </FooterColumn>
              <FooterSocialGrid />
            </div>
          </div>
        </div>
        <FooterLower />
      </div>
    );
  }
}

export default Footer;
