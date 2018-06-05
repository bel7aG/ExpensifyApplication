import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { AppRouter } from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import {  addExpense /*, removeExpense, editExpense*/ } from './actions/expenses';
// import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisiblExpenses from './selectors/expenses';

const store = configureStore();
const unsubscibe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisiblExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
  description: 'Water Bill',
  amount: 4999
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'Internet Bill',
  createdAt: 1000
}));

const expenseThree = store.dispatch(addExpense({
  description: 'Rent',
  notes: 'Clean history renter',
  amount: 500000
}));

const JSX = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(JSX, document.getElementById('root'));
registerServiceWorker();
