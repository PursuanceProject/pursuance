import React, { Component } from 'react';
import Assigner from './Assigner/Assigner';
import './TaskForm.css';
import generateId from '../../../../utils/generateId';
console.log(generateId, 'generateId');

class TaskForm extends Component {
  componentWillMount() {
    this.id = generateId('task')
  }

  onChange = (e) => console.log(e.target.value);

  render () {
    console.log(this.id, 'id!!!!');
    return (
      <div className="task-form-container">

        <form className="form-inline" name={this.id}>
          <div className="form-group">
            <label htmlFor="input-task-title">Task</label>
            <input type="text" className="form-control" id="input-task-title" placeholder="Task Title" onChange={this.onChange}/>
            <Assigner name={this.id + '-assigned_to'}/>
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
