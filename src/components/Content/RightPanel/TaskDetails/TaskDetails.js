import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPursuancesByIds, getTasks } from '../../../../actions';
import ReactMarkdown from 'react-markdown';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import FaCircleO from 'react-icons/lib/fa/circle-o';
import TaskStatus from '../../TaskStatus/TaskStatus';
import TaskAssigner from '../../TaskHierarchy/Task/TaskAssigner/TaskAssigner';
import TaskDueDate from '../../TaskDueDate/TaskDueDate';
import { updateFormField, patchTask } from '../../../../actions';

import './TaskDetails.css';

class TaskDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      taskDescription: '',
      refresh: false
    };
    this.taskDescription = '';
  }

  editTaskDescription = e => {
    this.taskDescription = e.target.value;
  };

  editModeToggle = () => {
    this.setState({
      editMode: !this.state.editMode
    });
    console.log(this.state.editMode);
  };

  closeOnEsc = e => {
    if (this.state.editMode === true && e.keyCode === 27) {
      this.editModeToggle();
    }
  };

  onSubmit = () => {
    if (this.state.editMode) {
      const patchedTaskDescription = {
        gid: this.props.rightPanel.taskGid,
        deliverables: this.taskDescription
      };
      patchTask(patchedTaskDescription);
      this.setState({
        editMode: false
      });
      window.location.reload();
    }
  };

  refresh = () => {
    this.setState({
      refresh: !this.state.refresh
    });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.closeOnEsc, false);
    document.addEventListener('keydown', this.refresh, false);
  }

  componentWillMount() {
    console.log(this.props);

    const { currentPursuanceId, tasks, getTasks, rightPanel } = this.props;

    if (tasks.taskMap[rightPanel.taskGid]) {
      this.setState({
        taskDescription: tasks.taskMap[rightPanel.taskGid].deliverables
      });
    }

    if (rightPanel.taskGid && !tasks.taskMap[rightPanel.taskGid]) {
      const thisTasksPursuanceId = rightPanel.taskGid.split(/_/)[0];
      getTasks(thisTasksPursuanceId);

      if (thisTasksPursuanceId !== currentPursuanceId.toString()) {
        getTasks(currentPursuanceId);
      }
    }
  }

  showAssignee = () => {
    const {
      pursuances,
      tasks,
      getPursuancesByIds,
      rightPanel: { taskGid }
    } = this.props;

    const task = tasks.taskMap[taskGid];
    if (!task) {
      return <span />;
    }

    const assignedPursuanceId = task.assigned_to_pursuance_id;

    // Get details of pursuances missing from Redux
    const ids = [];
    if (!pursuances[task.pursuance_id]) {
      ids.push(task.pursuance_id);
    }
    if (assignedPursuanceId && !pursuances[assignedPursuanceId]) {
      ids.push(assignedPursuanceId);
    }
    if (ids.length > 0) {
      getPursuancesByIds(ids);
      return null;
    }

    return (
      (assignedPursuanceId &&
        pursuances[assignedPursuanceId] &&
        pursuances[assignedPursuanceId].suggestionName) ||
      (task.assigned_to && '@' + task.assigned_to)
    );
  };

  render() {
    const {
      pursuances,
      tasks,
      rightPanel: { taskGid }
    } = this.props;
    const task = tasks.taskMap[taskGid];
    if (!task) {
      return <div className="no-task">Ain't nobody got task fo that.</div>;
    }
    const subtaskGids = task.subtask_gids;
    const { editMode } = this.state;

    return (
      <div className="discuss-ctn">
        <div className="task-details-ctn">
          <div className="task-assignment-ctn">
            <TaskStatus
              gid={task.gid}
              status={task.status}
              patchTask={this.props.patchTask}
            />
            <div className="assigned-to-ctn">
              <TaskAssigner
                taskGid={taskGid}
                placeholder={this.showAssignee()}
                assignedTo={this.showAssignee()}
              />
            </div>
            <div className="due-date-ctn">
              <TaskDueDate
                id={task.gid}
                taskData={task}
                autoFocus={true}
                patchTask={this.props.patchTask}
              />
            </div>
            <div className="task-discuss-icons-ctn">
              <div className="discuss-icon-ctn">
                <FaEllipsisV size={20} />
              </div>
            </div>
          </div>
          <div className="pursuance-discuss-ctn">
            <div className="pursuance-task-title-ctn">
              <div className="discuss-task-title-ctn">
                <span className="discuss-task-title">{task.title}</span>
              </div>
              <div className="pursuance-title-ctn">
                <span className="pursuance-title">
                  Created in{' '}
                  {pursuances[task.pursuance_id] && (
                    <em>{pursuances[task.pursuance_id].name}</em>
                  )}
                </span>
              </div>
            </div>

            <div className="task-deliverables-ctn">
              <div className="task-deliverables-header">
                <h4>
                  <strong>Descriptions / Deliverables</strong>
                </h4>

                <button
                  className="editSubmit"
                  onClick={e => {
                    e.preventDefault();
                    this.editModeToggle();
                    this.onSubmit();
                    this.refresh();
                  }}
                >
                  {editMode ? 'Save' : 'Edit'}
                </button>
              </div>

              {editMode && (
                <div className="input">
                  <form>
                    <label>
                      <textarea
                        className="desc"
                        onChange={this.editTaskDescription}
                        defaultValue={task.deliverables}
                      />
                    </label>
                  </form>
                </div>
              )}

              {editMode ? console.log('EM') : console.log('NOT EM')}

              {!editMode && (
                <span>
                  <ReactMarkdown
                    source={task.deliverables}
                    render={{
                      Link: props => {
                        if (props.href.startsWith('/')) {
                          return <a href={props.href}>{props.children}</a>;
                        }
                        return (
                          <a href={props.href} target="_blank">
                            {props.children}
                          </a>
                        );
                      }
                    }}
                  />
                </span>
              )}
            </div>

            <div className="subtasks-ctn">
              <h4>
                <strong>Subtasks</strong>
              </h4>
              <ul className="subtasks-list">
                {subtaskGids.map((gid, i) => {
                  return (
                    <li key={i} className="subtask-item">
                      <FaCircleO size={8} className="fa-circle-o" />
                      {tasks.taskMap[gid].title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    ({ currentPursuanceId, pursuances, tasks, rightPanel }) => ({
      currentPursuanceId,
      pursuances,
      tasks,
      rightPanel
    }),
    { getPursuancesByIds, getTasks, patchTask }
  )(TaskDetails)
);
