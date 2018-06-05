import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../actions/filters';

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text" value={props.filters.text}
      onChange={
        (event) => {
          console.log(event.target.value);
          //should Change the Redux Store right here  USING   dispatch
          props.dispatch(setTextFilter(event.target.value));
        }
      }
    />
  </div>
);

const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
