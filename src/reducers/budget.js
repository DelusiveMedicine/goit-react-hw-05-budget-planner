import types from '../constants';

const initState = {
  data: [],
  total: 0,
  budget: 0,
  balance: 0,
};

export default (state = initState, { type, payload }) => {
  const { data, total, budget } = state;

  switch (type) {
    case types.SAVE_BUDGET:
      return {
        ...state,
        budget: payload,
        balance:
          payload - data.reduce((acc, expense) => acc + expense.amount, 0),
      };

    case types.ADD_EXPENSE:
      return {
        ...state,
        data: [...data, payload],
        total: total + payload.amount,
        balance: budget - (total + payload.amount),
      };

    case types.REMOVE_EXPENSE:
      return {
        ...state,
        data: data.filter(expense => expense.id !== payload),
        total: total - data.find(expense => expense.id === payload).amount,
        balance:
          budget -
          (total - data.find(expense => expense.id === payload).amount),
      };

    default:
      return state;
  }
};
