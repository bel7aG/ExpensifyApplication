import React, {Component} from 'react';

export default class ExpenseForm extends Component {
  state = {
    description: '',
    notes: ''
  };

  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState(() => ({ description }));
  };

  onNotesChange = (event) => {
    const notes = event.target.value;
    this.setState(() => ({ notes }))
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
            type="number"
            placeholder="Amount"
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.notes}
            onChange={this.onNotesChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}
