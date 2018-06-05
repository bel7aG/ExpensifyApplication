import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text" value={props.filters.text}
      onChange={
        (event) => {
          //should Change the Redux Store right here  USING   dispatch
          props.dispatch(setTextFilter(event.target.value));
        }
      }
    />
    <select onChange={(event) => {
      switch (event.target.value) {
        case 'date':
          props.dispatch(sortByDate());
          break;
        case 'amount':
          props.dispatch(sortByAmount());
          break;
        default:
          props.dispatch();
          break;
      }
    }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
