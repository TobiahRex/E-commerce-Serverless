import React from 'react';
import { propTypes } from './assets/propValidation';
import './assets/css/contact-us.css';
import inputsData from './assets/inputsData';
import {
  WebflowJs,
} from './assets/utils';

import {
  HdrPage,
  ContactForm,
  InputWithLabel,
  TextAreaWithLabel,
  CheckBoxWithLabel,
  MdSendButton,
} from './components';

class ContactUs extends React.Component {
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

  renderHelper = data =>
  data.map((dataObj) => {
    if (dataObj.component === 'InputWithLabel') {
      return (
        <InputWithLabel
          {...dataObj.props}
          key={new Buffer(`${dataObj.props.type + Date.now()}`, 'utf8').toString('base64')}
        />
      );
    }
    return ('');
  })

  render() {

    return (
      <div className="contact-us">
        <div className="contact-us contact-us__container w-container">
          <HdrPage />
          <ContactForm>
            {this.renderHelper(inputData)}
            <TextAreaWithLabel />
            <CheckBoxWithLabel />
            <MdSendButton />
          </ContactForm>
        </div>
      </div>
    );
  }
}

export default ContactUs;
