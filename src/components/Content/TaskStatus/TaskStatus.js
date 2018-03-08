import React, { Component } from 'react';
import './TaskStatus.css';

class TaskStatus extends Component {

  render() {
    const { status } = this.props;

    return (
      <div className="task-status-ctn">
        <span>
          {(status || "New").replace(/([a-z])([A-Z])/g, "$1 $2")}
        </span>
      </div>
    )
  }
}

export default TaskStatus;
