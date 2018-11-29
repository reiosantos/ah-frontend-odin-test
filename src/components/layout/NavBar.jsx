import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'logo.png';

const NavBar = () => (
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
        <li>
          <NavLink className="nav-link  text-white" to="/register">
            SignUp
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
