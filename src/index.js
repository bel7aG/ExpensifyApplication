import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { AppRouter } from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import {  addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisiblExpenses from './selectors/expenses';
import "./playground/HOC";


const store = configureStore();
const unsubscibe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisiblExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
  description: 'Coffe',
  notes: 'cool one',
  amount: 36,
  createdAt: 5500
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

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
