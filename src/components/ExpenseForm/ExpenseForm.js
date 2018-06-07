import React, {Component} from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false,
    error: ""
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
    if (amount === "" || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please Provide Description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        notes: this.state.note,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
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
            onFocusChange={this.onFocusChange}

            isOutsideRange={() => false}

            numberOfMonths={1}
            transitionDuration={350}
            withPortal={true}
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
