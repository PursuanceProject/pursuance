import React, { Component } from 'react';
import './TaskForm.css';

class TaskForm extends Component {

  render () {
    return (
      <div className="task-form-container">

        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="input-task-title">Task</label>
            <input type="text" className="form-control" id="input-task-title" placeholder="Task Title" />
          </div>
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        </form>

      </div>
    );
  }
}

export default TaskForm;
