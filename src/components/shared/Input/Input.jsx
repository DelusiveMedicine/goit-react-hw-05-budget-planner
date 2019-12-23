import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './styles';

const Input = ({ type, value, onChange, name, placeholder }) => (
  <StyledInput
    type={type}
    value={value}
    onChange={onChange}
    name={name}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  type: ' text',
  value: '',
  onChange: () => null,
  name: '',
  placeholder: '',
};

export default Input;
