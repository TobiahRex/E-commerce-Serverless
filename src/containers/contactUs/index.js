import React from 'react';
import { propTypes } from './assets/propValidation';
import './assets/css/contact-us.css';

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
    const inputData = [{
      component: 'InputWithLabel',
      props: {
        type: 'name',
        containerInfo: {
          className: 'name__container',
        },
        labelInfo: {
          className: 'name__label',
          htmlFor: 'name',
          label: 'Name',
        },
        inputInfo: {
          className: 'name__input w-input',
          dataName: 'Name',
          id: 'name',
          name: 'name',
          placeholder: 'Enter your name',
          type: 'text',
        },
      },
    }, {
      component: 'InputWithLabel',
      props: {
        type: 'email',
        containerInfo: {
          className: 'email__container',
        },
        labelInfo: {
          className: 'email__label',
          htmlFor: 'email',
          label: 'Email',
        },
        inputInfo: {
          className: 'email__input w-input',
          dataName: 'Email',
          id: 'email',
          name: 'email',
          placeholder: 'Enter your Email address',
          type: 'email',
        },
      },
    },
    {
      component: 'TextAreaWithLabel',
      props: {
        className: 'message__input w-input',
        dataName: 'message field',
        id: 'message-field',
        maxLength: '5000',
        name: 'message-field',
        placeholder: 'What would you like to say to us?',
        required: 'required',
        resize: 'vertical"',
      },
    },
    {
      element: 'label',
      className: 'email__label',
      htmlFor: 'email',
      label: 'Email Address',
    },
    {
      element: 'input',
      className: 'Name__input w-input',
      dataname: 'Email',
      id: 'email',
      name: 'email',
      placeholder: 'Enter your email',
      type: 'email',
    }];
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
