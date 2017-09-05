import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';
import { WebflowJs } from './assets/utils';

const ContactForm = (props) => {
  WebflowJs(); //eslint-disable-line

  return (
    <div className="main__contact-us">
      <div className="main__contact-us-form w-form">

        <Validation.components.Form
          ref={props.assignRefToForm}
          onSubmit={props.handleOnSubmit}
          className="contact-us__container"
          // data-name="Email Form"
          // id="wf-form-Email-Form"
          // name="wf-form-Email-Form"
        >{props.children}</Validation.components.Form>

        {/* <form
          className="contact-us__container"
          data-name="Email Form"
          id="wf-form-Email-Form"
          name="wf-form-Email-Form"
        >{props.children}</form> */}

      </div>
    </div>
  );
};

const { arrayOf, any, func } = PropTypes;
ContactForm.propTypes = {
  children: arrayOf(any).isRequired,
  handleOnSubmit: func.isRequired,
  assignRefToForm: func.isRequired,
};

export default ContactForm;
