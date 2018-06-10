import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showAssignee } from '../../../../utils/tasks';
import { getPursuancesByIds, patchTask } from '../../../../actions';
import TaskStatus from '../../TaskStatus/TaskStatus';
import TaskAssigner from '../../TaskHierarchy/Task/TaskAssigner/TaskAssigner';
import TaskDueDate from '../../TaskDueDate/TaskDueDate';
import TaskOptions from './TaskOptions/TaskOptions';

import './TaskDetailsTopbar.css';

class TaskDetailsTopbar extends Component {

  showAssignee = () => {
    const {
      pursuances,
      currentPursuanceId,
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

    const { placeholder } =
      showAssignee(task, currentPursuanceId, pursuances);

    return placeholder;
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
            <TaskOptions
              taskData={task}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(({currentPursuanceId, pursuances, tasks, rightPanel}) => ({currentPursuanceId, pursuances, tasks, rightPanel}),
  { getPursuancesByIds, patchTask })(TaskDetailsTopbar);
