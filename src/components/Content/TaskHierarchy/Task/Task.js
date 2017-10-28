import React, { Component } from 'react';
import TiPlus from 'react-icons/lib/ti/plus';
import TiMinus from 'react-icons/lib/ti/minus';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);

    this.tasks = this.props.taskData.subtasks;
  }

  mapTaskChildren = () => {
    console.log(this.task);
    return this.tasks.map((task) => {
      return <Task key={task.pursuance_id + task.id} taskData={task}/>;
    });
  }

  styleLi = () => {

  }

  render() {
    const task = this.props.taskData;
    return (
      <ul className="ul-ctn">
        <li className="li-task-ctn" style={this.styleLi()}>
          <div className="task-row-ctn">
            <div className="plus-ctn" onClick={this.toggleRow}>
              <TiMinus />
            </div>
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
          {task.subtasks && this.mapTaskChildren()}
        </li>
      </ul>
    );
  }
}

export default Task;
