import React from 'react';
import PropTypes from 'prop-types';
import { WebflowJs } from './assets/utils';

import {
  InputWithLabel,
  TextAreaWithLabel,
  CheckBoxWithLabel,
  MdSendButton,
} from '../../components';

const ContactForm = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="main__contact-us">
      <div className="main__contact-us-form w-form">

        <form
          className="contact-us__container"
          data-name="Email Form"
          id="wf-form-Email-Form"
          name="wf-form-Email-Form"
        >{props.children}</form>

      </div>
    </div>
  );
};

const { objectOf, any } = PropTypes;
ContactForm.propTypes = {
  children: objectOf(any).isRequired,
};

export default ContactForm;
