import React, {Component} from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
  };

  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => ({ note }))
  };

  onAmountChange = (event) => {
    const amount = event.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  };

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }))
  };

  onFocusedChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusedChange}
            id="ok"
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.notes}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
