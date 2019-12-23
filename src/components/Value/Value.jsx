import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Amount } from './styles';

const Value = ({ label, value, isPositive }) => (
  <Container isPositive={isPositive}>
    <Label>{label}</Label>
    <Amount>{value}&nbsp;&#x24;</Amount>
  </Container>
);

Value.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isPositive: PropTypes.bool,
};

Value.defaultProps = {
  isPositive: false,
  value: 0,
};

export default Value;
