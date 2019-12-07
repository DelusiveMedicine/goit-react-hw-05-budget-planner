import { combineReducers } from 'redux';
import budgetReducer from './budget';

export default combineReducers({
  budgetState: budgetReducer,
});
