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
import AssignerSuggestions from '../../TaskManager/TaskForm/Suggestions/AssignerSuggestions';
import AssignerInput from '../../TaskManager/TaskForm/AssignerInput/AssignerInput';
import TaskStatus from '../../TaskStatus/TaskStatus';
import { filterSuggestion } from '../../../../utils/suggestions';
import './Task.css';
import {
  addTaskFormToHierarchy,
  removeTaskFormFromHierarchy,
  startSuggestions
} from '../../../../actions';

class RawTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showChildren: true,
      showTaskForm: false,
      showAssigneeInput: false,
      assignedTo: props.taskData.assigned_to_pursuance_id || props.taskData.assigned_to
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
    const { pursuances, autoComplete, taskMap, taskForm } = this.props;
    return task.subtask_gids.map((gid) => {
      return <Task
        key={gid}
        taskData={taskMap[gid]}
        taskMap={taskMap}
        pursuances={pursuances}
        autoComplete={autoComplete}
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

  showAssigneeInput = () => {
    this.setState({
      showAssigneeInput: true
    });
  }

  hideEditAssignee = () => {
    this.setState({
      showAssigneeInput: false
    });
  }

  onFocus = (e) => {
    const { users, pursuances, startSuggestions, currentPursuanceId, taskData } = this.props;
    const suggestions = Object.assign({}, pursuances, users);
    delete suggestions[currentPursuanceId];
    startSuggestions(e.target.value, filterSuggestion, suggestions, taskData.gid);
  }

  getStatusClassName = (task) => {
    const status = task.status || "New";
    return ("task-title-status-" + status);
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
    const { pursuances, taskData, autoComplete, currentPursuanceId } = this.props;
    const { showChildren, showTaskForm, assignedTo, showAssigneeInput } = this.state;
    const task = taskData;
    const assignedPursuanceId = task.assigned_to_pursuance_id;
    const assignedByThisPursuance = assignedPursuanceId === currentPursuanceId;
    let assignedToName = "";
    if (assignedPursuanceId && !assignedByThisPursuance && pursuances[assignedPursuanceId]) {
        assignedToName = pursuances[assignedPursuanceId].suggestionName;
    }
    else if (task.assigned_to) {
        assignedToName = '@' + task.assigned_to;
    }
    const placeholder = assignedToName;

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
                {
                  showAssigneeInput &&
                   <div className="assign-autocomplete-ctn">
                     {
                       autoComplete.suggestions
                       &&
                       task.gid === autoComplete.suggestionForm
                       &&
                       <AssignerSuggestions
                         suggestionForm={task.gid}
                         editMode={true}
                         hideEditAssignee={this.hideEditAssignee}
                       />
                     }
                    <AssignerInput
                      formId={task.gid}
                      editMode={true}
                      hideEditAssignee={this.hideEditAssignee}
                      placeholder={placeholder}
                    />
                  </div>
                  ||
                  (assignedPursuanceId && pursuances[assignedPursuanceId].suggestionName)
                    &&
                    <button onClick={this.showAssigneeInput} className="assignee-button">{pursuances[assignedPursuanceId].suggestionName}</button>
                  ||
                  (task.assigned_to && '@' + task.assigned_to)
                    &&
                    <button onClick={this.showAssigneeInput} className="assignee-button">{'@' + task.assigned_to}</button>
                  ||
                  <button className="edit-assignee-button" onClick={this.showAssigneeInput}>Assign</button>
                }
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
  ({ pursuances, users, currentPursuanceId, autoComplete }) =>
   ({ pursuances, users, currentPursuanceId, autoComplete }), {
  addTaskFormToHierarchy,
  removeTaskFormFromHierarchy,
  startSuggestions
})(RawTask));

// Why RawTask _and_ Task? Because Task.mapSubTasks() recursively
// renders Task components which weren't wrapped in a Redux connect()
// call (until calling the original component 'RawTask' and the
// wrapped component 'Task'), and thus `this.props` wasn't being
// populated by Redux within mapSubTasks(). More info:
// https://stackoverflow.com/a/37081592/197160
export default Task;
