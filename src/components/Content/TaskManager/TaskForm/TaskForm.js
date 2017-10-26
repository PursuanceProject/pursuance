import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import './ReactDatePicker.css';
import './TaskForm.css';

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = { startDate: '' };
  }

  handleDateSelect = (date) => {
    this.setState({ startDate: date });
  }

  handleDateChange = (date) => {
    this.setState({ startDate: date });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render () {
    return (
      <div className="task-form-container">

        <form className="task-form">
          <div id="input-task-title-ctn" className="">
            <input id="input-task-title" type="text" className="form-control"  placeholder="Task Title" />
          </div>
          <div className="assign-autocomplete">
            <input type="text" className="form-control" placeholder="Assigned To"/>
          </div>
          <div className="date-picker-ctn">
            <DatePicker
              placeholderText="YYYY-MM-DD"
              dateFormat="YYYY-MM-DD"
              selected={this.state.startDate}
              onSelect={this.handleDateSelect}
              onChange={this.handleDateChange}
            />
          </div>
          <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>
            Save
          </button>
        </form>

      </div>
    );
  }
}

export default TaskForm;
