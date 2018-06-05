import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { AppRouter } from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import {  addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisiblExpenses from './selectors/expenses';

const store = configureStore();
const unsubscibe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisiblExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
  description: 'Coca Cola',
  notes: 'cool one',
  amount: 36,
  createdAt: 2500
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'PC',
  notes: 'Asus',
  amount: 1900,
  createdAt: 3100
}));

const expenseThree = store.dispatch(addExpense({
  description: 'rent',
  notes: 'Clean history renter',
  amount: 1100,
  createdAt: 4750
}));

store.dispatch(setTextFilter('rent'));

// setTimeout(() => {
//   //after 4 second the setTextFilter change.
//   store.dispatch(setTextFilter('PC'));
// }, 4000)

const JSX = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(JSX, document.getElementById('root'));
registerServiceWorker();
