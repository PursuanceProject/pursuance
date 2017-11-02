import React, { Component } from 'react';
import * as postgrest from '../../../../api/postgrest';
import TiPlus from 'react-icons/lib/ti/plus';
import TiMinus from 'react-icons/lib/ti/minus';
import FaArrowCircleDown from 'react-icons/lib/fa/arrow-circle-down';
import TaskForm from '../../TaskManager/TaskForm/TaskForm';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showChildren: true,
      showTaskForm: false
    };
  }

  toggleChildren = () => {
    this.setState({
      ...this.state,
      showChildren: !this.state.showChildren
    });
  }

  toggleNewForm = () => {
    this.setState({
      ...this.state,
      showTaskForm: !this.state.showTaskForm
    });
    // TODO: Post route for nested form
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

  getTaskIcon = (task, showChildren) => {
    if(task.subtask_gids.length < 1) {
      return (
        <FaArrowCircleDown
          className="new-form-btn"
          onClick={this.toggleNewForm}/>
      );
    } else if (showChildren) {
      return (
        <div className="toggle-icon-ctn" onClick={this.toggleChildren}>
          <TiMinus />
        </div>
      );
    } else {
      return (
        <div className="toggle-icon-ctn" onClick={this.toggleChildren}>
          <TiPlus />
        </div>
      );
    }
  }

  render() {
    const task = this.props.taskData;
    const { showChildren, showTaskForm } = this.state;
    return (
      <li className="li-task-ctn">
        <div className="task-ctn">
          <div className="toggle-ctn">
            {this.getTaskIcon(task, showChildren)}
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
        {showTaskForm && <TaskForm gid={task.gid} taskData={task} />}
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
