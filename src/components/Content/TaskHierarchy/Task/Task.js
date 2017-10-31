import React, { Component } from 'react';
import * as postgrest from '../../../../api/postgrest';
import TiPlus from 'react-icons/lib/ti/plus';
import TiMinus from 'react-icons/lib/ti/minus';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showChildren: true
    };
  }

  toggleChildren = () => {
    this.setState({
      ...this.state,
      showChildren: !this.state.showChildren
    });
  }

  styleUl = () => {
    if (this.state.showChildren) {
      return { display: 'block' };
    } else {
      return { display: 'none' };
    }
  }

  mapSubTasks = (task) => {
    return task.subtask_gids.map((gid) => {
      return <Task
        key={gid}
        taskData={this.props.taskMap[gid]}
        taskMap={this.props.taskMap} />;
    });
  }

  render() {
    const task = this.props.taskData;
    const { showChildren } = this.state;
    return (
      <li className="li-task-ctn">
        <div className="task-ctn">
          <div className="toggle-ctn">
            <div className="toggle-icon-ctn" onClick={this.toggleChildren}>
              {showChildren ? <TiMinus /> : <TiPlus />}
            </div>
          </div>
          <div className="task-row-ctn">
            <div className="task-title">
              {task.title}
            </div>
            <div className="task-assigned-to">
              {task.assigned_to && '@'+task.assigned_to}
            </div>
            <div className="task-due-date">
              {task.due_date && postgrest.formatDate(task.due_date)}
            </div>
          </div>
        </div>
        {
          task.subtask_gids && task.subtask_gids.length > 0 &&
            <ul className="ul-ctn" style={this.styleUl()}>
              {this.mapSubTasks(task)}
            </ul>
        }
      </li>
    );
  }
}

export default Task;
