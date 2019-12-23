import React from 'react';
import PropTypes from 'prop-types';
import StyledLabel from './styles';

const Label = ({ children, customStyles }) => (
  <StyledLabel customStyles={customStyles}>{children}</StyledLabel>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  customStyles: PropTypes.node.isRequired,
};

export default Label;
