import React from 'react';
import PropTypes from 'prop-types';
import NavBar from 'components/layout/NavBar';
import { connect } from 'react-redux';
import { showSignUp } from 'store/actions/actionCreators';

const DefaultLayout = ({ children, className, showSignUpModal }) => (
  <div className={className}>
    <NavBar showSignUpModal={showSignUpModal} />
    <div className="main">{children}</div>
  </div>
);

DefaultLayout.defaultProps = {
  className: '',
};

DefaultLayout.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any,
  showSignUpModal: PropTypes.func.isRequired,
};

export const mapActionsToProps = dispatch => ({
  showSignUpModal: () => dispatch(showSignUp(true)),
});

export default connect(
  null,
  mapActionsToProps,
)(DefaultLayout);
