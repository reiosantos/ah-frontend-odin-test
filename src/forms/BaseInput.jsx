import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BaseInput = props => {
  const { label, renderInput, handleChange, errors, showsErrors, name } = props;
  const hasError = showsErrors && errors.has(name);

  return (
    <div className={classNames('form-group', { 'has-error': hasError })}>
      {label && <label> {label} </label>}
      {renderInput(handleChange, hasError)}
      {hasError && <div className="invalid-feedback h5">{errors.first(name)}</div>}
    </div>
  );
};

BaseInput.defaultProps = {
  showsErrors: true,
  label: null,
};

BaseInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  renderInput: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  showsErrors: PropTypes.bool,
};

BaseInput.displayName = 'BaseInput';

export { BaseInput };

export default BaseInput;
