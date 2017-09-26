import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

const ContactForm = props => (
  <div className="main__contact-us">
    <div className="main__contact-us-form w-form">

      <Validation.components.Form
        ref={props.assignRefToForm}
        onSubmit={props.handleOnSubmit}
        className="contact-us__container"
      >{props.children}</Validation.components.Form>

    </div>
  </div>
);

const { arrayOf, any, func } = PropTypes;
ContactForm.propTypes = {
  children: arrayOf(any).isRequired,
  handleOnSubmit: func.isRequired,
  assignRefToForm: func.isRequired,
};

export default ContactForm;
