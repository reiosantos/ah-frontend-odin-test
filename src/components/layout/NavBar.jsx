import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'logo.png';
import PropTypes from 'prop-types';

const NavBar = ({ showSignUpModal }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <NavLink className="navbar-brand d-flex align-items-center" to="/">
      <img src={Logo} alt="Author Havens Logo" />
      <span className="h3 font-weight-bold  pl-1"> Authors Haven </span>
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link text-light" to="/login">
            Login
          </NavLink>
        </li>
        <li className="nav-item active">
          <button
            className="nav-link text-light btn signBtn"
            onClick={showSignUpModal}
            type="submit"
          >
            Register
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

NavBar.propTypes = {
  showSignUpModal: PropTypes.func.isRequired,
};

export default NavBar;
