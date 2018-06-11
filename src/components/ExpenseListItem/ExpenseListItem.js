import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { removeExpense } from '../../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <h2>
      <Link to={"edit/" + id}>{description}</Link>
    </h2>
    <p>{amount} - {moment(createdAt).format('MMM Do, YYYY')}</p>
  </div>
);

export default connect()(ExpenseListItem);
