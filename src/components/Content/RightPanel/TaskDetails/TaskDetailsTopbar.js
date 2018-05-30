import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPursuancesByIds, patchTask } from '../../../../actions';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import TaskStatus from '../../TaskStatus/TaskStatus';
import TaskAssigner from '../../TaskHierarchy/Task/TaskAssigner/TaskAssigner';
import TaskDueDate from '../../TaskDueDate/TaskDueDate';

import './TaskDetailsTopbar.css';

class TaskDetailsTopbar extends Component {

  showAssignee = () => {
    const {
      pursuances,
      tasks,
      getPursuancesByIds,
      taskGid
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
      return null;
    }

    return (
          (assignedPursuanceId && pursuances[assignedPursuanceId] && pursuances[assignedPursuanceId].suggestionName)
          ||
          (task.assigned_to && '@' + task.assigned_to)
    )
  }

  render() {
    const { tasks, taskGid } = this.props;
    const task = tasks.taskMap[taskGid];
    if (!task) {
      return null;
    }

    return (
      <div className="task-details-topbar">
        <div className="task-assignment-ctn">
          <TaskStatus
            gid={task.gid}
            status={task.status}
            patchTask={this.props.patchTask}
          />
          <div className="assigned-to-ctn">
            <TaskAssigner
              taskGid={task.gid}
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
      </div>
    )
  }
}

export default connect(({currentPursuanceId, pursuances, tasks, rightPanel}) => ({currentPursuanceId, pursuances, tasks, rightPanel}),
  { getPursuancesByIds, patchTask })(TaskDetailsTopbar);
