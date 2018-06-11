import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm';
import { editExpense, removeExpense } from '../../actions/expenses';
import { Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const EditExpense = (props) => {
  console.log(props);
  return (
    <div>
      <h1 className="heading">
        <span className="heading-main">Edit Expense</span>
      </h1>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          console.log(expense);
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({id: props.expense.id}));
        props.history.push('/');
      }}>Remove</button>
    </div>
  )
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.expenseID)
});

export default connect(mapStateToProps)(EditExpense);
