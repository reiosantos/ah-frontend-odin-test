import React from 'react';
import PropTypes from 'prop-types';
import NavBar from 'components/layout/NavBar';

const DefaultLayout = ({ children, className }) => (
  <div className={className}>
    <NavBar />
    <div className="main">{children}</div>
  </div>
);

DefaultLayout.defaultProps = {
  className: '',
};

DefaultLayout.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any,
};

export default DefaultLayout;
