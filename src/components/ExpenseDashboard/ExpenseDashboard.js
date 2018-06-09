import React from 'react';
import ExpenseList from '../ExpenseList';
import ExpenseListFilters from '../ExpenseListFilters';

const ExpenseDashboard = () => (
  <div className="dashboard">
    <h2 className="heading">
      <span className="heading-main">Dashboard</span>
    </h2>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;
