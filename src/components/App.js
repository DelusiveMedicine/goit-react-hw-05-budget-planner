import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = props => {
  const { budgetState } = props;
  const { data } = budgetState;

  return (
    <Container>
      <BudgetForm />
      <Values />
      <ExpenseForm />
      {data.length > 0 && <ExpensesTable />}
    </Container>
  );
};

App.propTypes = {
  budgetState: PropTypes.shape({
    data: PropTypes.array,
    total: PropTypes.number,
    budget: PropTypes.number,
    balance: PropTypes.number,
  }).isRequired,
};

export default connect(({ budgetState }) => ({
  budgetState,
}))(App);
