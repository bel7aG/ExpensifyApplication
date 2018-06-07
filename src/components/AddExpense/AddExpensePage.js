import React from 'react';
import ExpenseForm from '../ExpenseForm';

const AddExpense = () => (
  <div>
    <h1>AddExpense Page</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        console.log(expense);
      }}
    />
  </div>
);

export default AddExpense;
