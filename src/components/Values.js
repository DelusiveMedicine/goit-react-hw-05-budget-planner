import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Value from './Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

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
    budget: PropTypes.number,
    balance: PropTypes.number,
  }).isRequired,
};

export default connect(({ budgetState }) => ({ budgetState }))(Values);
