import React from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import _ from 'lodash';
import { propTypes } from './assets/propValidation';
import './assets/css/contact-us.css';
import {
  WebflowJs,
  inputsData,
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

  submitMsg = () => {
    this.props.clearToaster();
    this.props.apiIsFetching();
    this.props.GraphQLsubmitMessage({ ...this.state })
    .then(({ data: { SubmitContactMsg: response } }) => {
      if (!response) {
        // this.props.GraphQLhandleError({ message: 'Oops! Looks like there was a problem.  Please try your order again later.  If the problem continues please contact us.' });
      } else {
        const result = CleanOffTypename(response);
        console.log('%cresult', 'background:lime;', result);

        if (result.error.hard || result.error.soft) {
          // this.props.GraphQLhandleError(result.error);
          this.props.apiFail();
        } else {
          this.props.toastSuccess(true, 'Email successfully sent!');
          this.props.apiSuccess();
        }
      }
    })
    .catch((error) => {
      console.log('%cerror', 'background:red;', error);
      this.props.GraphQLhandleError(error);
    });
  }

  render() {
    console.log('%cthis.state', 'background:red;', this.state);
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
              {...inputsData[0].props}
              value={this.state.name}
              handleOnChange={this.handleOnChange}
            />

            <InputWithLabel
              key={new Buffer('email', 'utf8').toString('base64')}
              {...inputsData[1].props}
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

            <MdSendButton
              apiFetching={this.props.apiFetching}
              submitMsg={this.submitMsg}
            />

          </ContactForm>
        </div>
      </div>
    );
  }
}

const ContactUsWithState = connect(({ user, api, toaster }) => ({
  userId: user.profile ? user.profile._id : '',
  apiFetching: api.fetching,
  toast: CheckForToast(toaster),
}), (dispatch, ownProps) => ({
  GraphQLsubmitContactMsg: (args) => {
    ownProps.SubmitContactMsg({
      variables: { ...args },
    });
  },
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

const ContactUsWithStateAndData = compose(
graphql(
  GraphQLsubmitMessage, { name: 'SubmitContactMsg' }),
)(ContactUsWithState);

const ContactUsWithStateAndData2 = connect(null, dispatch => ({
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
