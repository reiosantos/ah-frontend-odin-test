import React from 'react';
import { connect } from 'react-redux';
import Modal from 'components/utils/Modal';
import SignupForm from 'components/Signup';
import PropTypes from 'prop-types';

import { signUp, showSignUp } from 'store/actions/actionCreators';

const SignUpModal = ({ signupHandler, signupData, isSigningUp, hideSignUpModal }) => (
  <Modal title="Sign Up" show={isSigningUp} size="medium" onHide={hideSignUpModal}>
    <SignupForm signUp={signupHandler} signupData={signupData} />
  </Modal>
);

const mapStateToProps = state => ({
  signupData: state.signUpReducer.signupData,
  isSigningUp: state.signUpReducer.isSigningUp,
});

export const mapActionsToProps = dispatch => ({
  signupHandler: data => dispatch(signUp(data)),
  hideSignUpModal: () => dispatch(showSignUp(false)),
});

SignUpModal.propTypes = {
  isSigningUp: PropTypes.bool.isRequired,
  signupData: PropTypes.string.isRequired,
  signupHandler: PropTypes.func.isRequired,
  hideSignUpModal: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(SignUpModal);
