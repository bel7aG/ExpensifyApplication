import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../ExpenseForm';
import { editExpense } from '../../actions/expenses';

const EditExpense = (props) => {
  console.log(props);
  return (
    <div>
      <h1>EditExpense</h1>
      <ExpenseForm onSubmit={(expense) => {
        props.dispatch(editExpense(props.match.params.expenseID, expense));
        props.history.push('/');
      }}/>
    </div>
  );
};

export default connect()(EditExpense);
