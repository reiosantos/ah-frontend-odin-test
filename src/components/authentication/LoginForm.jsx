import React from 'react';
import PropTypes from 'prop-types';
import Form from 'forms/index';
import { NavLink } from 'react-router-dom';
import Input from 'forms/Input';

const LoginForm = ({ successSubmit }) => (
  <Form
    name="login-form"
    button={{ className: 'btn-primary btn-block', text: 'Login' }}
    action="/users/login/"
    beforeSubmit={data => ({ user: data })}
    successSubmit={successSubmit}
  >
    <Input name="email" type="email" label="Email" />
    <Input name="password" type="password" label="Password" />
    <NavLink to="/request_reset">Forgot Password?</NavLink>
  </Form>
);

LoginForm.propTypes = {
  successSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
