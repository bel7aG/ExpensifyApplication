import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses';
import getVisiblExpenses from './selectors/expenses';

const store = configureStore();
const unsubscribe = store.subscribe(() => {
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
    <App />
  </Provider>
);

ReactDOM.render(JSX, document.getElementById('root'));
registerServiceWorker();
