import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showTaskInPursuance } from '../../../../utils/tasks';
import { getPursuances, getTasks, getUsers, rpShowTaskDetails, patchTask } from '../../../../actions';
import { getPursuancesByIds, getTasks } from '../../../../actions';
import ReactMarkdown from 'react-markdown';
import FaCircleO from 'react-icons/lib/fa/circle-o';
import { updateFormField, patchTask } from '../../../../actions';
import TaskDetailsTopbar from './TaskDetailsTopbar';
import TaskTitle from './TaskTitle/TaskTitle';
import TaskIcons from './TaskIcons/TaskIcons';
import TaskForm from '../../TaskManager/TaskForm/TaskForm';
import TaskStatus from '../../TaskStatus/TaskStatus';
import TaskAssigner from '../../TaskHierarchy/Task/TaskAssigner/TaskAssigner';
import TaskDueDate from '../../TaskDueDate/TaskDueDate';

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

      // If this task was assigned to this pursuance from another
      // pursuance, grab the current pursuance's tasks, too
      if (currentPursuanceId &&
          thisTasksPursuanceId !== currentPursuanceId.toString()) {
        getTasks(currentPursuanceId);
      }
    }

    const { getPursuances, getUsers, pursuances, users } = this.props;
    if (Object.keys(users).length === 0) {
      getUsers();
    }
    if (Object.keys(pursuances).length <= 1) {
      getPursuances();
    }
  }

  render() {
    const { pursuances, currentPursuanceId, tasks, rpShowTaskDetails } = this.props;
    const {
      rightPanel: { taskGid }
    } = this.props;
    const task = tasks.taskMap[taskGid];
    if (!task) {
      if (taskGid) {
        return <div className="no-task">Ain't nobody got task fo' that.</div>;
      }
      return null;
    }
    const subtaskGids = task.subtask_gids;
    const { editMode } = this.state;

    const parent = tasks.taskMap[task.parent_task_gid];
    const parentTitle =
      parent &&
      showTaskInPursuance(parent, currentPursuanceId) &&
      parent.title;

    return (
      <div className="discuss-ctn">
        <div className="task-details-ctn">
          <TaskDetailsTopbar
            taskGid={taskGid}
          />
          <div className="pursuance-discuss-ctn">
            <div className="pursuance-task-title-ctn">
              <TaskTitle
                id={task.gid}
                title={task.title}
                patchTask={this.props.patchTask}
              />
              {parentTitle && (
                <div className="parent-task-ctn" onClick={() => rpShowTaskDetails({taskGid: task.parent_task_gid})}>
                  <h4><strong>Parent Task:</strong></h4>
                  {' '}
                  <span>{parentTitle}</span>
                </div>
              )}
            </div>
            <TaskIcons
              gid={task.gid}
              subtaskGids={task.subtask_gids}
            />
            <div className="pursuance-title-ctn">
              <span className="pursuance-title">
                Created in {pursuances[task.pursuance_id] && <em>{pursuances[task.pursuance_id].name}</em>}
              </span>
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
                {subtaskGids.map((gid, i)=> {
                  return <li key={i} className="subtask-item" onClick={() => rpShowTaskDetails({taskGid: gid})}>
                    <FaCircleO size={8} className="fa-circle-o" />{tasks.taskMap[gid].title}
                  </li>
                })}
              </ul>
            </div>
            <div className="create-subtask-ctn">
              <TaskForm
                parentGid={task.gid}
                key={task.gid}
                autoFocus={false}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(({currentPursuanceId, pursuances, tasks, rightPanel, users}) => ({currentPursuanceId, pursuances, tasks, rightPanel, users}),
  { getPursuances, getTasks, getUsers, rpShowTaskDetails, patchTask })(TaskDetails));
