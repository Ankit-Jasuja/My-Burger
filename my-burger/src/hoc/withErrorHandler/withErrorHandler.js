import React, { Component, Fragment } from "react";
import axios from "axios";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: false,
    };

    closeModel = () => {
      this.setState({ error: null });
    };

    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error });
        }
      );
    }

    render() {
      return (
        <Fragment>
          <Modal show={this.state.error} modalClosed={this.closeModel}>
            {this.state.error!=null?this.state.error.message:null}
          </Modal>
          <WrappedComponent {...this.props}></WrappedComponent>
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
