import React from 'react';
import ExpenseList from '../ExpenseList';
import ExpenseListFilters from '../ExpenseListFilters';

const ExpenseDashboard = () => (
  <div className="wrapup-main">
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
