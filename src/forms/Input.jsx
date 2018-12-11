import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BaseInput } from './BaseInput';

const Input = props => {
  const { type, name, data, inputClass } = props;
  const attributes = {
    ...props,
    renderInput: (handleChange, hasError) => (
      <input
        type={type}
        name={name}
        onChange={e => handleChange(name, e.currentTarget.value)}
        className={classNames(inputClass, { 'is-invalid': hasError })}
        value={data[name] || ''}
      />
    ),
  };

  return <BaseInput {...attributes} />;
};

Input.defaultProps = {
  type: 'text',
  inputClass: 'form-control',
  data: {},
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'number']),
  name: PropTypes.string.isRequired,
  inputClass: PropTypes.string,
  data: PropTypes.object,
};

Input.displayName = 'Input';

export default Input;
