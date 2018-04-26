import React, { Component } from 'react';
import moment from 'moment';
import * as postgrest from '../../../api/postgrest';
import DueDatePicker from '../TaskManager/TaskForm/DatePicker/DatePicker';


class TaskDueDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInput: false,
    };
  }

  onClick = () => {
    if (!this.state.showInput) {
      this.setState({
        showInput: true
      })
    }
  }

  hideInput = () => {
    this.setState({
      showInput: false
    })
  }

  onSubmit = (date) => {
    const { id, patchTask } = this.props;
    patchTask({
      gid: id,
      due_date: moment(date).format()
    })
    this.hideInput();
  }

  render() {
    const { id, taskData, autoFocus } = this.props;
    const { showInput } = this.state;
    const due_date = taskData.due_date;

    return (
      <div className="task-due-date" onClick={this.onClick}>
        {showInput && (
          <DueDatePicker
            id={id}
            selected={due_date && moment(due_date)}
            onSubmit={this.onSubmit}
            autoFocus={autoFocus}
            onBlur={this.hideInput}
           />
        )}
        {!showInput && due_date && postgrest.formatDate(due_date)}
        {!showInput && !due_date && "Set"}
      </div>
    )
  }
}

export default TaskDueDate;
