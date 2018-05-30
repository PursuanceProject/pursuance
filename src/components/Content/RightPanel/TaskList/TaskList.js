import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rpUpdateTaskListFilter } from '../../../../actions';
import TaskDetailsTopbar from '../TaskDetails/TaskDetailsTopbar';
import './TaskList.css';

class TaskList extends Component {

  getTasks = () => {
    const { currentPursuanceId, tasks: { taskMap } } = this.props;

    // TODO: Make more efficient (only bother passing in tasks from
    // this pursuance, not all of taskMap)
    const taskMatches = this.taskMatches(taskMap);

    const tasksArr = [];
    let task;
    for (let gid in taskMap) {
      task = taskMap[gid];
      if (task.pursuance_id === currentPursuanceId ||
          task.assigned_to_pursuance_id === currentPursuanceId) {
        if (taskMatches[gid]) {
          tasksArr.push(task);
        }
      }
    }

    tasksArr.sort((t1, t2) => {
      if (t1.due_date && !t2.due_date) {
        return -1000000;
      }
      if (t2.due_date && !t1.due_date) {
        return 1000000;
      }
      t1.due_date_parsed = t1.due_date_parsed || new Date(t1.due_date);
      t2.due_date_parsed = t2.due_date_parsed || new Date(t2.due_date);
      return t1.due_date_parsed - t2.due_date_parsed;
    })

    return tasksArr.map((task) => {
      return (
        <div key={task.gid} className="task-item">
          <TaskDetailsTopbar
            taskGid={task.gid}
          />
          <div className="discuss-task-title-ctn">
            <span className="discuss-task-title">{task.title}</span>
          </div>
        </div>
      )
    })
  }

  afterColon = (field) => {
    return field.split(/:/, 2)[1];
  }

  parseTaskListFilter = () => {
    const { rightPanel: { taskListFilter } } = this.props;
    const { user: { username } } = this.props;
    const parsed = {
      title: '',
      assigned_to: [],
      dueBefore: [],
      due_date: [],
      dueAfter: [],
      status: [],
    };
    const fields = taskListFilter.split(/ /g);
    let field;
    for (let i in fields) {
      field = fields[i];
      if (field === '') {
        continue;
      }
      if (field.startsWith('@')) {
        const assigned_to = field.slice(1);
        if (assigned_to === 'me') {
          parsed.assigned_to.push(username);
        } else {
          parsed.assigned_to.push(assigned_to);
        }
      } else if (field.startsWith('<')) {
        parsed.dueBefore.push(field.slice(1));
      } else if (field.startsWith('due:') ||
                 field.startsWith('d:')) {
        parsed.due_date.push(this.afterColon(field));
      } else if (field.startsWith('>')) {
        parsed.dueAfter.push(field.slice(1));
      } else if (field.startsWith('status:') ||
                 field.startsWith('st:') ||
                 field.startsWith('s:')) {
        parsed.status.push(this.afterColon(field));
      } else {
        if (parsed.title !== '') {
          parsed.title += ' ';
        }
        parsed.title += field;
      }
    }
    return parsed;
  }

  taskMatches = (tasks) => {
    const { taskListFilter } = this.props.rightPanel;
    const taskListFilterTrimmed = taskListFilter.trim();
    const filters = this.parseTaskListFilter();
    const matches = {};
    let task;
    let status;
    let assigned_to;
    let due_date;
    for (let gid in tasks) {
      if (taskListFilterTrimmed === '') {
        matches[gid] = true;
        continue;
      }
      task = tasks[gid];

      let matchStatus = false;
      let matchAssignedTo = false;
      let matchDueDate = false;
      let matchTitle = false;

      for (let i in filters.status) {
        status = filters.status[i];
        if (task.status.toLowerCase().startsWith(status.toLowerCase())) {
          matchStatus = true;
          break;
        }
      }
      if (!matchStatus && filters.status.length > 0) {
        // Status didn't match && filtering on status => Not an overall match
        continue;
      }

      for (let i in filters.assigned_to) {
        assigned_to = filters.assigned_to[i];
        if (task.assigned_to_pursuance_id === null
            &&
            ((task.assigned_to || '').startsWith(assigned_to)
            ||
            (task.assigned_to === null &&
             assigned_to === '-'))) {
          matchAssignedTo = true;
          break;
        }
      }
      if (!matchAssignedTo && filters.assigned_to.length > 0) {
        // Assignee didn't match && filtering on assignee => Not an overall match
        continue;
      }

      for (let i in filters.due_date) {
        due_date = filters.due_date[i];
        if ((task.due_date || '').startsWith(due_date) ||
            (task.due_date === null && due_date === '-')) {
          matchDueDate = true;
          break;
        }
      }
      if (!matchDueDate && filters.due_date.length > 0) {
        // Due date didn't match && filtering on due date => Not an overall match
        continue;
      }

      if (task.title.toLowerCase().indexOf(filters.title.toLowerCase()) !== -1) {
        matchTitle = true;
      }
      if (!matchTitle && filters.title.length > 0) {
        // Title didn't match && filtering on title => Not an overall match
        continue;
      }

      // TODO(elimisteve): Use filters.{dueBefore,dueAfter}

      matches[gid] = true;
    }
    return matches;
  }

  getAssignee = (task) => {
    return (
      <div>
        <strong>{'@' + task.assigned_to}</strong>
      </div>
    )
  }

  onChangeFilter = (e) => {
    const { rpUpdateTaskListFilter } = this.props;
    rpUpdateTaskListFilter(e.target.value);
  }

  render() {
    const { rightPanel: { taskListFilter } } = this.props;

    return (
      <div className="task-list-ctn">
        <div className="pursuance-tasks-ctn">
          <h2>Task List</h2>
          <div className="task-list-filter">
            <div className="filter-label">
              Filter:
            </div>
            <input
              type="text"
              value={taskListFilter}
              placeholder="@me status:new due:2019-05"
              autoFocus
              onChange={this.onChangeFilter}
            />
          </div>
          <ul className="task-list">
            {this.getTasks()}
          </ul>
        </div>
      </div>
    );
  };
}

export default connect(({currentPursuanceId, rightPanel, tasks, user}) => ({currentPursuanceId, rightPanel, tasks, user}), { rpUpdateTaskListFilter })(TaskList);
