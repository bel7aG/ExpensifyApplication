import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>ExpenseList</h1>
    <p>my github Page is <span>{props.expenses.length}</span></p>
  </div>
);

export default connect((state) => ({
  expenses: state.expenses
}))(ExpenseList);
