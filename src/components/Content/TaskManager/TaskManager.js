import React, { Component } from 'react';
import TaskForm from './TaskForm/TaskForm';
import './TaskManager.css';
import '../Content.css';

class TaskManager extends Component {

  render () {
    return (
      <div className="content">
        <TaskForm />
      </div>
    );
  }
}

export default TaskManager;
