import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './shared/Button';
import { removeExpense } from '../AC';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

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
    budget: PropTypes.number,
    balance: PropTypes.number,
  }).isRequired,
  removeExpense: PropTypes.func.isRequired,
};

export default connect(({ budgetState }) => ({ budgetState }), {
  removeExpense,
})(ExpensesTable);
