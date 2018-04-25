import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as postgrest from '../../../../api/postgrest';
import { getPursuancesByIds, getTasks, patchTask } from '../../../../actions';
import ReactMarkdown from 'react-markdown';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import FaCircleO from 'react-icons/lib/fa/circle-o';
import TaskStatus from '../../TaskStatus/TaskStatus';
import './TaskDetails.css';

class TaskDetails extends Component {

  componentWillMount() {
    const {
      currentPursuanceId,
      tasks,
      getTasks,
      rightPanel
    } = this.props;

    if (rightPanel.taskGid && !tasks.taskMap[rightPanel.taskGid]) {
      const thisTasksPursuanceId = rightPanel.taskGid.split(/_/)[0];
      getTasks(thisTasksPursuanceId);

      // If this task was assigned to this pursuance from another
      // pursuance, grab the current pursuance's tasks, too
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
      return (
        <span></span>
      )
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
      return (
        <span></span>
      )
    }

    return (
      <span>
        {
          (assignedPursuanceId && pursuances[assignedPursuanceId] && pursuances[assignedPursuanceId].suggestionName)
          ||
          (task.assigned_to && '@' + task.assigned_to)
        }
      </span>
    )
  }

  render() {
    const { pursuances, tasks, rightPanel: { taskGid } } = this.props;
    const task = tasks.taskMap[taskGid];
    if (!task) {
      return <div className="no-task">Ain't nobody got task fo' that.</div>
    }
    const subtaskGids = task.subtask_gids;

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
              {this.showAssignee()}
            </div>
            <div className="due-date-ctn">
              {task.due_date && postgrest.formatDate(task.due_date)}
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
                  Created in {pursuances[task.pursuance_id] && <em>{pursuances[task.pursuance_id].name}</em>}
                </span>
              </div>
            </div>
            <div className="task-deliverables-ctn">
              <h4><strong>Description / Deliverables</strong></h4>
              <span>
                <ReactMarkdown
                  source={task.deliverables}
                  render={{Link: props => {
                    if (props.href.startsWith('/')) {
                      return <a href={props.href}>{props.children}</a>;
                    }
                    // If link to external site, open in new tab
                    return <a href={props.href} target="_blank">{props.children}</a>;
                  }}} />
              </span>
            </div>
            <div className="subtasks-ctn">
              <h4><strong>Subtasks</strong></h4>
              <ul className="subtasks-list">
                {subtaskGids.map((gid, i)=> {
                  return <li key={i} className="subtask-item">
                    <FaCircleO size={8} className="fa-circle-o" />{tasks.taskMap[gid].title}
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default withRouter(connect(({currentPursuanceId, pursuances, tasks, rightPanel}) => ({currentPursuanceId, pursuances, tasks, rightPanel}),
  { getPursuancesByIds, getTasks, patchTask })
(TaskDetails));
