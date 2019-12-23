import React from 'react';
import PropTypes from 'prop-types';
import StyledForm from './styles';

const Form = ({ onSubmit, children }) => (
  <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
);

Form.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Form.defaultProps = {
  onSubmit: () => null,
};

export default Form;
