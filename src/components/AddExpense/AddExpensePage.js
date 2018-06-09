import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm';
import { addExpense } from '../../actions/expenses';

const AddExpense = (props) => (
  <div>
    <h2 className="heading">
      <span className="heading-main">Add Expense</span>
    </h2>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpense);
