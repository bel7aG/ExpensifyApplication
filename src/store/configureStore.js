import { createStore, combineReducers } from 'redux';
import filterReducer from '../reducers/filters';
import expenseReducer from '../reducers/expenses';

//Store creation
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
    })
  );
  return store;
}
