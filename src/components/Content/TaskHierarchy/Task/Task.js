import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as postgrest from '../../../../api/postgrest';
import TiPlus from 'react-icons/lib/ti/plus';
import TiMinus from 'react-icons/lib/ti/minus';
import FaHandODown from 'react-icons/lib/fa/hand-o-down';
import FaCommentsO from 'react-icons/lib/fa/comments-o';
import TaskForm from '../../TaskManager/TaskForm/TaskForm';
import AssignerSuggestions from '../../TaskManager/TaskForm/Suggestions/AssignerSuggestions';
import { filterSuggestion } from '../../../../utils/suggestions';
import { startSuggestions } from '../../../../actions';
import './Task.css';

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showChildren: true,
      showTaskForm: false,
      showEditAssignee: false,
      assignedTo: props.taskData.assigned_to || props.taskData.assigned_to_pursuance_id
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

  styleUl = () => {
    if (this.state.showChildren) {
      return { display: 'block' };
    } else {
      return { display: 'none' };
    }
  }

  mapSubTasks = (task) => {
    const { pursuances, autoComplete, taskData, taskMap } = this.props;
    return task.subtask_gids.map((gid) => {
      return <Task
        key={gid}
        taskData={taskMap[gid]}
        taskMap={taskMap}
        pursuances={pursuances}
        autoComplete={autoComplete} />;
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

  showEditAssignee = () => {
    this.setState({
      showEditAssignee: true
    })
  }

  onFocus = (e) => {
    const { users, pursuances, startSuggestions, currentPursuanceId, taskData } = this.props;
    const suggestions = Object.assign({}, pursuances, users);
    delete suggestions[currentPursuanceId];
    startSuggestions(e.target.value, filterSuggestion, suggestions, taskData.gid);
  }

  render() {
    const { pursuances, taskData, autoComplete } = this.props;
    const task = taskData;
    const assignedPursuanceId = task.assigned_to_pursuance_id;
    const { showChildren, showTaskForm, assignedTo, showEditAssignee } = this.state;
    let placeholder = assignedTo;
    if (Number.isInteger(assignedTo)) {
      placeholder = pursuances[assignedTo].suggestionName;
    }
    console.log(this.props, 'props in task')
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
            </div>
            <div className="task-assigned-to">
              <span>
                {
                  showEditAssignee &&             <input
                                className="form-control assign-to"
                                type="text"
                                placeholder={placeholder || 'Assigned To'}
                                value={''}
                                name={'assigned_to'}
                                // onChange={this.onChange}
                                onFocus={this.onFocus}
                                onBlur={this.onBlur}
                                // onKeyDown={this.onAssignerKeyDown}
                              />
                  ||
                  (assignedPursuanceId && pursuances[assignedPursuanceId].suggestionName)
                    &&
                    <button onClick={this.showEditAssignee}>{pursuances[assignedPursuanceId].suggestionName}</button>
                  ||
                  (task.assigned_to && '@' + task.assigned_to)
                    &&
                    <button onClick={this.showEditAssignee}>{'@' + task.assigned_to}</button>
                  ||
                  <button className="edit-assignee-button" onClick={this.showEditAssignee}>Assign</button>
                }
                {
                  autoComplete.suggestions
                  &&
                  task.gid === autoComplete.suggestionForm
                  &&
                  <AssignerSuggestions />
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

export default withRouter(connect(({ pursuances, users, currentPursuanceId, autoComplete }) =>
  ({ pursuances, users, currentPursuanceId, autoComplete }), {
   startSuggestions
})(Task));
