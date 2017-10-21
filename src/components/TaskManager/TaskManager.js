import React, { Component } from 'react';
import TaskForm from './TaskForm/TaskForm';
import './TaskManager.css';

class TaskManager extends Component {

  render () {
    return (
      <div className="task-manager-container">
        <TaskForm />
      </div>
    );
  }
}

export default TaskManager;
