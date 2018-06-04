import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => {
    let i = 1;
    return (
      <div>
        <h1>Expense List</h1>
        <p>Expenses Length <span>{props.expenses.length}</span></p>
        {props.expenses.map((expense) => (
          <div>
            <h4>Expense {i++}</h4>
            <p>{expense.description}</p>
            <p>{expense.amount}</p>
            <p>{expense.createdAt}</p>
            <br />
          </div>
        ))}
      </div>
    );
};

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseList);
