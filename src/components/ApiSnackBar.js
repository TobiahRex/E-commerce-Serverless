import React, { Component, PropTypes } from 'react';
import Snackbar from 'material-ui/Snackbar';
/*
This Component relies on a piece of state passed down in props.
Should contain, an error & fetching boolean.
*/
export default class apiSnackBar extends Component {
  static propTypes = {
    apiStatus: PropTypes.objectOf(PropTypes.any),
  };
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      message: '',
      error: null,
      fetching: null,
    };
  }

  componentWillMount() {
    this.setState({
      error: this.props.apiStatus.error,
      fetching: this.props.apiStatus.fetching,
    });
  }

  componentWillReceiveProps(nextProps) {
    const error = this.state.error;
    const fetching = this.state.fetching;
    const apiError = nextProps.apiStatus.error;
    const apiFetching = nextProps.apiStatus.fetching;

    if (!error && fetching && !apiError && !apiFetching) {
      // If fetching was successfully completed
      this.setState({
        message: "Database updated SUCCESSFULLY!",
        error: false,
        fetching: false,
        show: true,
      });
      return true;
    } else if (!apiError && apiFetching) {
      // If we just started fetching
      this.setState({
        message: "API Request in Progress",
        error: false,
        fetching: true,
        show: true,
      });
      return true;
    } else if (!error && apiError) {
      // if fetching yielded an error
      this.setState({
        message: "Database update FAILED!",
        error: true,
        fetching: false,
        show: true,
      });
      return true;
    }
    return true;
  }

  render() {
    const PROPS = {
      open: this.state.show,
      message: this.state.message,
      autoHideDuration: 2000,
      onRequestClose: () => this.setState({ show: false }),
    };
    return (
      <div>
        <Snackbar {...PROPS} />
      </div>
    );
  }
}
