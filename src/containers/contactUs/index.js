import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import _ from 'lodash';
import { propTypes } from './assets/propValidation';
import './assets/css/contact-us.css';
import {
  WebflowJs,
  inputsData,
  apiActions,
  toasterActions,
  CheckForToast,
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
    const npCopy = _.cloneDeep(nextProps);
    const tpCopy = _.cloneDeep(this.props);

    if (!_.isEqual(npCopy, tpCopy)) return true;

    if (!_.isEqual(nextState, this.state)) return true;

    return false;
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitMsg = () => {
    this.props.GraphQLsubmitContactMsg({ ...this.state })
    .then((result) => {
      console.log('%cresult', 'background:lime;', result);
    })
    .catch((error) => {
      console.log('%cerror', 'background:red;', error);
    });
  }

  render() {
    console.log('%capiFetching', 'background:cyan;', this.props.apiFetching);
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

const ContactUsWithState = connect(({ user, api }) => ({
  userId: user.profile ? user.profile._id : '',
  apiFetching: api.fetching,
  toast: CheckForToast(toaster),
}), (dispatch, ownProps) => ({
  toastError: (toast, msg) => dispatch(toasterActions.toastError(toast, msg)),
  toastSuccess: (toast, msg) => dispatch(toasterActions.toastSuccess(toast, msg)),
  toastWarning: (toast, msg) => dispatch(toasterActions.toastWarning(toast, msg)),
  clearToaster: () => dispatch(toasterActions.clearToaster()),
  //
  apiIsFetching: () => dispatch(apiActions.fetching()),
  apiFail: () => dispatch(apiActions.apiFail()),
  apiSuccess: () => dispatch(apiActions.apiSuccess()),
  GraphQLsubmitContactMsg: args => ownProps.SubmitContactMsg({
    variables: { ...args },
  }),
}))(ContactUs);

const ContactUsWithStateAndData = graphql(GraphQLsubmitMessage, {
  name: 'SubmitContactMsg',
})(ContactUsWithState);

export default ContactUsWithStateAndData;
