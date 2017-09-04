import React from 'react';
import { propTypes } from './assets/propValidation';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import './assets/css/contact-us.css';
import {
  WebflowJs,
  inputsData,
} from './assets/utils';
import {
  BreadCrumb,
  HdrPage,
  ContactForm,
  InputWithLabel,
  TextAreaWithLabel,
  CheckBoxWithLabel,
  MdSendButton,
} from './components';
import {
  GraphQLsubmitMessage,
} from './graphql';

class ContactUs extends React.Component {
  static propTypes = propTypes

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      emailAddress: '',
      message: '',
      userId: '',
      ccUser: true,
    };
  }

  componentDidMount() {
    WebflowJs(); // eslint-disable-line
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitMsg = () => {
    this.props.SubmitMsg({ ...this.state })
    .then((result) => {
      console.log('%cresult', 'background:lime;', result);
    })
    .catch((error) => {
      console.log('%cerror', 'background:red;', error);
    });
  }

  render() {
    return (
      <div className="contact-us">
        <div className="contact-us contact-us__container w-container">
          <BreadCrumb
            paths={['Home']}
            classes={['home']}
            destination={['']}
            lastCrumb="Contact Us"
          />
          <HdrPage />
          <ContactForm>

            <InputWithLabel
              key={new Buffer('name', 'utf8').toString('base64')}
              {...inputsData[0]}
              value={this.state.name}
              handleOnChange={this.handleOnChange}
            />

            <InputWithLabel
              key={new Buffer('email', 'utf8').toString('base64')}
              {...inputsData[1]}
              value={this.state.name}
              handleOnChange={this.handleOnChange}
            />

            <TextAreaWithLabel
              handleOnChange={this.handleOnChange}
              value={this.state.message}
            />

            <CheckBoxWithLabel
              handleOnChange={this.handleOnChange}
              value={this.state.sendCopy}
            />

            <MdSendButton submitMsg={this.submitMsg} />

          </ContactForm>
        </div>
      </div>
    );
  }
}

const ContactUsWithState = connect(({ user }) => ({
  userId: user.profile ? user.profile._id : '',
}), (dispatch, ownProps) => ({
  GraphQLsubmitContactMsg: args => ownProps.SubmitContactMsg({
    variables: { ...args },
  }),
}))(ContactUs);

const ContactUsWithStateAndData = graphql(GraphQLsubmitMessage, {
  name: 'SubmitContactMsg',
})(ContactUsWithState);

export default ContactUsWithStateAndData;
