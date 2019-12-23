import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from './styles';
import Value from '../Value/Value';

const Values = ({ budgetState }) => {
  const { budget, total, balance } = budgetState;
  return (
    <Container>
      <Value label="Budget" value={budget} isPositive />
      <Value label="Expenses" value={total} />
      <Value label="Balance" value={balance} isPositive={balance >= 0} />
    </Container>
  );
};

Values.propTypes = {
  budgetState: PropTypes.shape({
    data: PropTypes.array,
    total: PropTypes.number,
    budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    balance: PropTypes.number,
  }).isRequired,
};

export default connect(({ budgetState }) => ({ budgetState }))(Values);
