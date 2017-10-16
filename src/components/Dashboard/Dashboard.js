import React, { Component } from 'react';
import TaskManager from './TaskManager/TaskManager';
import './Dashboard.css';

class Dashboard extends Component {

  render () {
    return (
      <div id="dashboard">
        <div className="task-manager-title">
          <h1>Pursuance: Task Manager</h1>
        </div>
        <TaskManager />
      </div>
    );
  }
}

export default Dashboard;
