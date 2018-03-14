import React, { Component } from 'react';
import './TaskStatus.css';

class TaskStatus extends Component {

  render() {
    const status = this.props.status || "New";

    return (
      <div className={"task-status-ctn task-status-"+status.toLowerCase()}>
        <span>
          {status.replace(/([a-z])([A-Z])/g, "$1 $2")}
        </span>
      </div>
    )
  }
}

export default TaskStatus;
