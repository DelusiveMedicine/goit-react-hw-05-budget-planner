import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from './styles';
import BudgetForm from '../BudgetForm';
import ExpenseForm from '../ExpenseForm';
import ExpensesTable from '../ExpensesTable/ExpensesTable';
import Values from '../Values/Values';

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
    budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    balance: PropTypes.number,
  }).isRequired,
};

export default connect(({ budgetState }) => ({
  budgetState,
}))(App);
