import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './styles';
import Button from '../shared/Button/Button';
import { removeExpense } from '../../AC';

const ExpensesTable = ({ budgetState, removeExpense }) => {
  const { data } = budgetState;
  return (
    <Table>
      <thead>
        <tr>
          <th>Expense name</th>
          <th>Expense amount</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, amount }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{amount}</td>
            <td>
              <Button label="Delete" onClick={() => removeExpense(id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

ExpensesTable.propTypes = {
  budgetState: PropTypes.shape({
    data: PropTypes.array,
    total: PropTypes.number,
    budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    balance: PropTypes.number,
  }).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export default connect(({ budgetState }) => ({ budgetState }), {
  removeExpense,
})(ExpensesTable);
