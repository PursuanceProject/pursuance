import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as postgrest from '../../../../api/postgrest';
import generateId from '../../../../utils/generateId';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import TiPlus from 'react-icons/lib/ti/plus';
import TiMinus from 'react-icons/lib/ti/minus';
import FaHandODown from 'react-icons/lib/fa/hand-o-down';
import FaCommentsO from 'react-icons/lib/fa/comments-o';
import TaskForm from '../../TaskManager/TaskForm/TaskForm';
import TaskStatus from '../../TaskStatus/TaskStatus';
import {
  addTaskFormToHierarchy,
  removeTaskFormFromHierarchy
} from '../../../../actions';
import './Task.css';

class RawTask extends Component {
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

  toggleNewForm = () => {
    const {
      taskData,
      addTaskFormToHierarchy,
      removeTaskFormFromHierarchy
    } = this.props;

    if (!taskData.subtaskform_id) {
      addTaskFormToHierarchy(taskData.gid, generateId('task'));
    } else {
      removeTaskFormFromHierarchy(taskData.gid, taskData.subtaskform_id);
    }
  }

  redirectToDiscuss = () => {
    const { history, taskData, match: { params: { pursuanceId } } } = this.props;
    history.push({
      pathname: `/pursuance/${pursuanceId}/discuss/task/${taskData.gid}`
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
    const { taskMap, taskForm } = this.props;
    return task.subtask_gids.map((gid) => {
      return <Task
        key={gid}
        taskData={taskMap[gid]}
        taskMap={taskMap}
        taskForm={taskForm} />;
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

  getStatusClassName = (task) => {
    const statusLower = (task.status || "New").toLowerCase();
    return ("task-title-status-" + statusLower);
  }

  showTitle = (task) => {
    const statusClassName = this.getStatusClassName(task);

    if (task.parent_task_gid) {
      return (
        <div className={statusClassName}>{task.title}</div>
      );
    }
    // Bold top-level tasks
    return (
      <div className={statusClassName}>
        <strong>{task.title}</strong>
      </div>
    );
  }

  getTooltip = (icon) => {
    if (icon === 'hands-down') {
      return (
        <Tooltip id="tooltip-hands-down">
          <strong>Create Subtask</strong>
        </Tooltip>
      );
    } else if (icon === 'chat') {
      return (
        <Tooltip id="tooltip-chat">
          <strong>Discuss Task</strong>
        </Tooltip>
      );
    }
  }

  render() {
    const { pursuances, taskData, match: { params: { pursuanceId } } } = this.props;
    const task = taskData;
    const assignedPursuanceId = task.assigned_to_pursuance_id;
    const assignedByThisPursuance = assignedPursuanceId === Number(pursuanceId);
    let assignedTo = "";
    if (assignedPursuanceId && !assignedByThisPursuance && pursuances[assignedPursuanceId]) {
        assignedTo = pursuances[assignedPursuanceId].suggestionName;
    }
    else if (task.assigned_to) {
        assignedTo = '@' + task.assigned_to;
    }
    const { showChildren } = this.state;
    return (
      <li className="li-task-ctn">
        <div className="task-ctn">
          <div className="toggle-ctn">
            {this.getTaskIcon(task, showChildren)}
          </div>
          <div className="task-row-ctn">
            <div className="task-title">
              {this.showTitle(task)}
            </div>
            <div className="task-icons-ctn">
              <OverlayTrigger
                placement="bottom"
                overlay={this.getTooltip('hands-down')}>
                <div className="icon-ctn" onClick={this.toggleNewForm}>
                  <FaHandODown />
                </div>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                overlay={this.getTooltip('chat')}>
                <div className="icon-ctn" onClick={this.redirectToDiscuss}>
                  <FaCommentsO />
                </div>
              </OverlayTrigger>
            </div>
            <TaskStatus
              status={task.status}
            />
            <div className="task-assigned-to">
              <span>
                {assignedTo}
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
        {task.subtaskform_id && <TaskForm
                                  parentGid={task.gid}
                                  id={task.subtaskform_id} />}
      </li>
    );
  }
}

const Task = withRouter(connect(
  ({ pursuances }) => ({ pursuances }), {
  addTaskFormToHierarchy,
  removeTaskFormFromHierarchy
})(RawTask));

// Why RawTask _and_ Task? Because Task.mapSubTasks() recursively
// renders Task components which weren't wrapped in a Redux connect()
// call (until calling the original component 'RawTask' and the
// wrapped component 'Task'), and thus `this.props` wasn't being
// populated by Redux within mapSubTasks(). More info:
// https://stackoverflow.com/a/37081592/197160
export default Task;
