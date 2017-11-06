import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as postgrest from '../../../../api/postgrest';
import TiPlus from 'react-icons/lib/ti/plus';
import TiMinus from 'react-icons/lib/ti/minus';
import FaHandODown from 'react-icons/lib/fa/hand-o-down';
import FaCommentsO from 'react-icons/lib/fa/comments-o';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import TaskForm from '../../TaskManager/TaskForm/TaskForm';
import { deleteTask } from '../../../../actions';
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

  redirectToDiscuss = () => {
    // this.props.history.push('/pursuance/1/discuss');
  }

  deleteTaskBtn = () => {
    this.props.deleteTask(this.props.taskData.gid);
  }

  styleUl = () => {
    if (this.state.showChildren) {
      return { display: 'block' };
    } else {
      return { display: 'none' };
    }
  }

  mapSubTasks = (task) => {
    const { pursuances } = this.props;
    return task.subtask_gids.map((gid) => {
      return <Task
        key={gid}
        taskData={this.props.taskMap[gid]}
        taskMap={this.props.taskMap}
        pursuances={pursuances} />;
    });
  }

  getTaskIcon = (task, showChildren) => {
    if (task.subtask_gids.length < 1) {
      return (
        <div className="toggle-icon-ctn-disable" />
      );
    } else if (showChildren) {
      return (
        <div className="toggle-icon-ctn" onClick={this.toggleChildren}>
          <TiMinus className="minus-icon" />
        </div>
      );
    } else {
      return (
        <div className="toggle-icon-ctn" onClick={this.toggleChildren}>
          <TiPlus className="plus-icon" />
        </div>
      );
    }
  }

  render() {
    const { pursuances, taskData } = this.props;
    const task = taskData;
    const assignedPursuanceId = task.assigned_to_pursuance_id;
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
            <div className="task-icons-ctn">
              <div className="icon-ctn" onClick={this.toggleNewForm}>
                <FaHandODown />
              </div>
              <div className="icon-ctn" onClick={this.redirectToDiscuss}>
                <FaCommentsO />
              </div>
              <div className="icon-ctn" onClick={this.deleteTaskBtn}>
                <FaTrashO />
              </div>
            </div>
            <div className="task-assigned-to">
              <span>
                { (task.assigned_to && '@' + task.assigned_to)
                  ||
                  (assignedPursuanceId && pursuances[assignedPursuanceId].suggestionName)
                }
              </span>
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
        {showTaskForm && <TaskForm parentGid={task.gid} />}
      </li>
    );
  }
}

export default withRouter(connect(({ pursuances }) =>
  ({ pursuances }), {
    deleteTask,
})(Task));
