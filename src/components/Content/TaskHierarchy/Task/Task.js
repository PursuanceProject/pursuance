import React, { Component } from 'react';
import * as postgrest from '../../../../api/postgrest';
import TiPlus from 'react-icons/lib/ti/plus';
import TiMinus from 'react-icons/lib/ti/minus';
import './Task.css';

class Task extends Component {

  styleLi = () => {

  }

  render() {
    const task = this.props.taskData;
    return (
      <ul className="ul-ctn">
        <li className="li-task-ctn">
          <div className="plus-ctn" onClick={this.toggleRow}>
            <TiMinus />
          </div>
          <div className="task-ctn" style={this.styleLi()}>
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
        </li>

        {(task.subtask_gids || []).map((gid) => {
          return <Task
                   key={gid}
                   taskData={this.props.taskMap[gid]}
                   taskMap={this.props.taskMap} />
        })}
      </ul>
    );
  }
}

export default Task;
