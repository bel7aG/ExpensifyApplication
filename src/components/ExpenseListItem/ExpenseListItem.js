import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { removeExpense } from '../../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h2>
      <NavLink to={"edit/" + id}>{description}</NavLink>
    </h2>
    <p>{amount} - {moment(createdAt).format('MMM Do, YYYY')}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }));
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
