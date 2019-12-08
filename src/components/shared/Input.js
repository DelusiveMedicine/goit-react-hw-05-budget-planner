import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  color: #171718;
  font: inherit;
  font-size: 1.2rem;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #bdbdbd;
  width: 100%;
  outline: 0;

  &:focus {
    border: 1px solid #2b32b2;
  }
`;

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
