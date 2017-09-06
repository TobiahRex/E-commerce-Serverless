import React from 'react';

import './assets/styles/style.css';
import { propTypes } from './assets/propValidation';
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
  static propTypes = propTypes

  constructor(props) {
    super(props);

    this.state = {
      x: '',
    };
  }

  componentDidMount() {
    WebflowJs(); // eslint-disable-line
  }

  render() {
    return (
      <div className="about__container-main">
        <BreadCrumb
          paths={['Home']}
          classes={['home']}
          destination={['']}
          lastCrumb="About Us"
        />
        <HdrPage header="About Us" />
        <AboutBlurb />
        <SubHdr header="NJ2JP Team" />
        <AboutMembers members={contentData.english} />
      </div>
    );
  }
}

export default AboutUs;
