import shortid from 'shortid';
import types from '../constants';

export const saveBudget = value => ({
  type: types.SAVE_BUDGET,
  payload: value,
});

export const addExpense = ({ name, amount }) => ({
  type: types.ADD_EXPENSE,
  payload: {
    id: shortid.generate(),
    name,
    amount: Number(amount),
  },
});

export const removeExpense = id => ({
  type: types.REMOVE_EXPENSE,
  payload: id,
});
