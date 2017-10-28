import React, { Component } from 'react';
import Task from './Task/Task';
import TaskForm from '../TaskManager/TaskForm/TaskForm';
import { connect } from 'react-redux';
import { getUsers } from '../../../actions';
import * as postgrest from '../../../api/postgrest';
import './TaskHierarchy.css';
import '../Content.css';

class TaskHierarchy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayLi: true,
      taskMap: {},
      rootTaskGids: []
    };
  }

  componentWillMount() {
    this.props.getUsers();

    const pursuanceId = this.props.pursuanceId;
    postgrest.getJSON(`/tasks?pursuance_id=eq.${pursuanceId}&order=id.asc,created.asc`)
      .then((tasks) => {
        const { taskMap, rootTaskGids } = this.buildTaskHierarchy(tasks);
        this.setState({
          taskMap,
          rootTaskGids
        });
      })
      .catch((err) => {
        console.log('Error fetching tasks:', err);
      });
  }

  buildTaskHierarchy = (tasks) => {
    const taskMap = {};
    for (let i = 0; i < tasks.length; i++) {
      taskMap[tasks[i].gid] = Object.assign(tasks[i], {subtask_gids: []});
    }

    const rootTaskGids = [];

    for (let i = 0; i < tasks.length; i++) {
      const t = tasks[i];

      // If a task has no parents, it's a root task
      if (!t.parent_task_gid) {
        rootTaskGids.push(t.gid);
      } else {
        // Add t to its parent's subtasks
        taskMap[t.parent_task_gid].subtask_gids.push(t.gid)
      }
    }

    return {
      taskMap,
      rootTaskGids
    };
  }

  addPostedTaskToHierarchy = (task) => {
    task.subtask_gids = task.subtask_gids || [];

    let parentTaskMap = {};
    const parentTaskGid = task.parent_task_gid;
    if (parentTaskGid) {
      // Append task.gid to parentTask.subtask_gids
      const parentTask = this.state.taskMap[parentTaskGid];
      parentTaskMap = {
        [parentTaskGid]: Object.assign({},
                                       parentTask,
                                       {subtask_gids: [...parentTask.subtask_gids,
                                                       task.gid]})
      }
    }

    this.setState({
      taskMap: Object.assign({},
                             this.state.taskMap,
                             {[task.gid]: task},
                             parentTaskMap)
    })
  }

  toggleRow = () => {
    this.setState({
      ...this.state,
      displayLi: !this.state.displayLi
    });
  }

  styleLi = () => {
    if (this.state.displayLi) {
      return { display: 'block' }
    } else {
      return { display: 'none' }
    }
  }

  renderHierarchy = () => {
    return this.state.rootTaskGids.map((gid) => {
      return <Task
               key={gid}
               taskData={this.state.taskMap[gid]}
               taskMap={this.state.taskMap} />;
    });
  }

  render() {
    return (
      <div className="content-ctn">
        {this.renderHierarchy()}
        <TaskForm />
      </div>
    );
  }
}

export default connect(null, { getUsers })(TaskHierarchy);
