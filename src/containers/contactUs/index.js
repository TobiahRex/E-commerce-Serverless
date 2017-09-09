import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { injectIntl, intlShape } from 'react-intl';
import _ from 'lodash';
import './assets/css/contact-us.css';
import {
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

const {
  bool,
  func,
  shape,
  string,
} = PropTypes;

class ContactUs extends React.Component {
  static propTypes = {
    intl: intlShape.isRequired,
    clearToaster: func.isRequired,
    apiFetching: bool.isRequired,
    apiIsFetching: func.isRequired,
    GraphQLsubmitContactMsg: func.isRequired,
    GraphQLhandleError: func.isRequired,
    apiFail: func.isRequired,
    apiSuccess: func.isRequired,
    toastSuccess: func.isRequired,
    toast: shape({
      type: string,
      message: string,
    }).isRequired,
  }
  constructor(props) {
    super(props);

    const {
      intl: {
        messages: {
          'contactus.header': header,
          'contactus.breadcrumb.paths1': bcPaths1,
          'contactus.breadcrumb.lastcrumb': bcLastCrumb,
          'contactus.label.name': labelName,
          'contactus.label.email': labelEmail,
          'contactus.label.message': labelMessage,
          'contactus.input.placeholder.name': placeholderName,
          'contactus.input.placeholder.email': placeholderEmail,
          'contactus.input.placeholder.message': placeholderMessage,
          'contactus.checkbox.label': checkboxLabel,
          'contactus.button.label.send': send,
          'contactus.button.label.submitting': submitting,
          'contactus.button.label.success': success,
        },
      },
    } = props;

    this.intl = {
      header,
      bcPaths1,
      bcLastCrumb,
      labelName,
      labelEmail,
      labelMessage,
      checkboxLabel,
      placeholderName,
      placeholderEmail,
      placeholderMessage,
      labels: {
        send,
        submitting,
        success,
      },
    };

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

  recaptchaOnLoadCb = () => console.info('Recaptcha DONE!'); // eslint-disable-line no-console

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
            paths={[this.intl.bcPaths1]}
            classes={['home']}
            destination={['']}
            lastCrumb={this.intl.bcLastCrumb}
          />
          <HdrPage header={this.intl.header} />

          <ContactForm
            key={this.state.formKey}
            handleOnSubmit={this.handleOnSubmit}
            assignRefToForm={this.assignRefToForm}
          >

            <InputWithLabel
              {...contentData[0].props}
              label={this.intl.labelName}
              placeholder={this.intl.placeholderName}
              value={this.state.name}
              handleOnChange={this.handleOnChange}
            />

            <InputWithLabel
              {...contentData[1].props}
              label={this.intl.labelEmail}
              placeholder={this.intl.placeholderEmail}
              value={this.state.emailAddress}
              handleOnChange={this.handleOnChange}
            />

            <TextAreaWithLabel
              label={this.intl.labelMessage}
              placeholder={this.intl.placeholderMessage}
              value={this.state.message}
              handleOnChange={this.handleOnChange}
            />

            <CheckBoxWithLabel
              label={this.intl.checkboxLabel}
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
              labels={this.intl.labels}
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
const ContactUsIntl = injectIntl(ContactUs);

const ContactUsWithState = connect(null, (dispatch, ownProps) => ({
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
}))(ContactUsIntl);

const ContactUsWithStateAndData = graphql(
  GraphQLsubmitMessage, { name: 'SubmitContactMsg' },
)(ContactUsWithState);

const ContactUsWithStateAndData2 = connect(({ toaster, api, user }) => ({
  toast: CheckForToast(toaster),
  userId: user.profile ? user.profile._id : '',
  apiFetching: api.fetching,
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
