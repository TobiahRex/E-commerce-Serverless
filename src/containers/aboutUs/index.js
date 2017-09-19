import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import './assets/styles/style.css';
import {
  WebflowJs,
  contentData,
} from './assets/utils';

import {
  BreadCrumb,
  HdrPage,
  SubHdr,
  AboutBlurb,
  AboutMembers,
} from './components';

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    const {
      intl: {
        messages: {
          'aboutus.breadCrumb.paths1': bcPaths1,
          'aboutus.breadCrumb.lastCrumb': lastCrumb,
          'aboutus.header.title': header,
          'aboutus.header.subtitle': subHeader,
        },
      },
    } = props;

    this.intl = {
      bcPaths1,
      lastCrumb,
      header,
      subHeader,
    };
  }

  componentDidMount() {
    WebflowJs(); // eslint-disable-line
  }

  render() {
    return (
      <div className="about__container-main">
        <BreadCrumb
          paths={[this.intl.bcPaths1]}
          classes={['home']}
          destination={['']}
          lastCrumb={this.intl.lastCrumb}
        />
        <HdrPage header={this.intl.header} />
        <AboutBlurb />
        <SubHdr header={this.intl.subHeader} />
        <AboutMembers members={contentData.english} />
      </div>
    );
  }
}
AboutUs.propTypes = {
  intl: intlShape.isRequired,
};
const AboutUsWithIntl = injectIntl(AboutUs);
export default AboutUsWithIntl;
