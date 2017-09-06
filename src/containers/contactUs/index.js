import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import _ from 'lodash';
import { propTypes } from './assets/propValidation';
import './assets/css/contact-us.css';
import {
  WebflowJs,
  contentData,
  apiActions,
  toasterActions,
  CheckForToast,
  CleanOffTypename,
} from './assets/utils';
import {
  BreadCrumb,
  HdrPage,
  ContactForm,
  MdSendButton,
  InputWithLabel,
  TextAreaWithLabel,
  CheckBoxWithLabel,
  RecaptchaWidget,
} from './components';
import {
  GraphQLsubmitMessage,
} from './graphql';

class ContactUs extends React.Component {
  static propTypes = propTypes

  constructor(props) {
    super(props);

    this.state = {
      error: {
        hard: false,
        soft: false,
        message: '',
      },
      formError: null,
      name: '',
      emailAddress: '',
      message: '',
      userId: '',
      ccUser: true,
      recaptchaToken: '',
      formKey: String(Date.now(), 'utf8').toString('base64'),
    };
  }

  componentDidMount() {
    WebflowJs(); // eslint-disable-line
  }

  componentWillUnmount() {
    this.props.clearToaster();
  }

  componentWillReceiveProps(nextProps) {
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) {
      this.setState(prevState => ({
        ...prevState,
        ...nextProps,
      }));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(this.props.apiFetching, nextProps.apiFetching)) return true;

    if (!_.isEqual(this.state, nextState)) return true;

    return false;
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({ formError: this.form.validateAll() });
  }

  assignRefToForm = (formComp) => { this.form = formComp; }

  assignRefToRecaptcha = (recaptchaComp) => { this.recaptcha = recaptchaComp; }

  recaptchaVerifyCb = response => this.setState({ recaptchaToken: response });

  recaptchaOnLoadCb = () => console.info('Recaptcha DONE!'); //eslint-disable-line

  recaptchaExpiredCb = () => this.setState(prevState => ({
    ...prevState,
    recaptchaToken: '',
  }), () => {
    this.recaptcha.reset();
  });

  enableSubmitButton = ({ formError, recaptchaToken, error }) => {
    const noFormErrors = !formError;
    const networkErrors = /(Network Error)|(Server Error)g/.test(this.props.toast.message) || /(Network Error)|(Server Error)g/.test(error.message);

    if (networkErrors || !noFormErrors || !recaptchaToken) return false;
    return true;
  }

  submitMsg = () => {
    this.props.clearToaster();
    this.props.apiIsFetching();
    this.props.GraphQLsubmitContactMsg({
      name: this.state.name,
      userId: this.state.userId,
      ccUser: this.state.ccUser,
      message: this.state.message,
      emailAddress: this.state.emailAddress,
      recaptchaToken: this.state.recaptchaToken,
    })
    .then(({ data: { SubmitContactMsg: response } }) => {
      if (!response) {
        this.props.GraphQLhandleError({ message: 'Oops! Looks like there was a problem.  Please try your order again later.  If the problem continues please contact us.' });
      } else {
        const result = CleanOffTypename(response);

        this.setState(prevState => ({
          ...prevState,
          error: {
            hard: false,
            soft: false,
            message: '',
          },
          name: '',
          userId: '',
          ccUser: true,
          message: '',
          emailAddress: '',
          formError: null,
          formKey: String(Date.now(), 'utf8').toString('base64'),
        }), () => {
          if (result.error.hard || result.error.soft) {
            this.props.GraphQLhandleError(result.error);
            this.props.apiFail();
          } else {
            this.recaptcha.reset();
            this.props.apiSuccess();
            this.props.toastSuccess(true, 'Successfully sent!');
            setTimeout(() => this.props.clearToaster(), 4000);
          }
        });
      }
    })
    .catch((error) => {
      this.props.GraphQLhandleError(error);
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
          <HdrPage header="Contact Us" />

          <ContactForm
            key={this.state.formKey}
            handleOnSubmit={this.handleOnSubmit}
            assignRefToForm={this.assignRefToForm}
          >

            <InputWithLabel
              {...contentData.english[0].props}
              value={this.state.name}
              handleOnChange={this.handleOnChange}
            />

            <InputWithLabel
              {...contentData.english[1].props}
              value={this.state.emailAddress}
              handleOnChange={this.handleOnChange}
            />

            <TextAreaWithLabel
              value={this.state.message}
              handleOnChange={this.handleOnChange}
            />

            <CheckBoxWithLabel
              value={this.state.ccUser}
              handleOnChange={this.handleOnChange}
            />

            <RecaptchaWidget
              verifyCb={this.recaptchaVerifyCb}
              onLoadCb={this.recaptchaOnLoadCb}
              expiredCb={this.recaptchaExpiredCb}
              assignRefToRecaptcha={this.assignRefToRecaptcha}
            />

            <MdSendButton
              toast={this.props.toast}
              enable={this.enableSubmitButton(this.state)}
              submitMsg={this.submitMsg}
              apiFetching={this.props.apiFetching}
            />

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
  GraphQLhandleError: (error) => {
    let errorMsg = '';

    if (/(ObjectID failed for value \"\" at path \"userId\")/g.test(error.message)) {
      errorMsg = 'You must login or register to complete this transaction.';
    } else if (/(GraphQL error: )/.test(error.message)) {
      errorMsg = error.message.replace(/(GraphQL error: )+/g, '');
    }

    if (error.soft) {
      ownProps.toastWarning(true, error.message);
    } else if (error.hard) {
      ownProps.toastError(true, error.message);
    } else {
      ownProps.toastError(true, errorMsg || error.message);
    }
    ownProps.apiFail();
  },
}))(ContactUs);

const ContactUsWithStateAndData = graphql(
  GraphQLsubmitMessage, { name: 'SubmitContactMsg' },
)(ContactUsWithState);

const ContactUsWithStateAndData2 = connect(({ toaster, api }) => ({
  apiFetching: api.fetching,
  toast: CheckForToast(toaster),
}), dispatch => ({
  toastError: (toast, msg) =>
    dispatch(toasterActions.toastError(toast, msg)),
  toastSuccess: (toast, msg) =>
    dispatch(toasterActions.toastSuccess(toast, msg)),
  toastWarning: (toast, msg) =>
    dispatch(toasterActions.toastWarning(toast, msg)),
  clearToaster: () => dispatch(toasterActions.clearToaster()),
  apiIsFetching: () => dispatch(apiActions.fetching()),
  apiFail: () => dispatch(apiActions.apiFail()),
  apiSuccess: () => dispatch(apiActions.apiSuccess()),
}))(ContactUsWithStateAndData);

export default ContactUsWithStateAndData2;
