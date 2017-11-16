import React, { Component } from 'react';
import Task from './Task/Task';
import TaskForm from '../TaskManager/TaskForm/TaskForm';
import { connect } from 'react-redux';
import {
  getPursuances,
  getUsers,
  getTasks,
  addPostedRootTaskToHierarchy,
  addPostedSubTaskToHierarchy
} from '../../../actions';
import './TaskHierarchy.css';
import '../Content.css';

class TaskHierarchy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayLi: true,
    };
  }

  componentWillMount() {
    const { getPursuances, getUsers, getTasks, currentPursuanceId } = this.props;
    getPursuances();
    getUsers();
    getTasks(currentPursuanceId);
  }

  componentWillReceiveProps(nextProps) {
    const { recentlyAddedTask } = this.props.tasks;
    let newTask = nextProps.tasks.recentlyAddedTask;
    if (newTask && newTask !== recentlyAddedTask) {
      this.updateTaskHierarchy(newTask);
    }
  }

  updateTaskHierarchy = (task) => {
    const { addPostedRootTaskToHierarchy, addPostedSubTaskToHierarchy } = this.props;
    task.subtask_gids = task.subtask_gids || [];

    const parentTaskGid = task.parent_task_gid;
    if (parentTaskGid) {
      addPostedSubTaskToHierarchy(task);
    }
    else {
      addPostedRootTaskToHierarchy(task);
    }
  }

  toggleRow = () => {
    this.setState({
      ...this.state,
      displayLi: !this.state.displayLi
    });
  }

  styleLi = () => {
    if (this.state.displayLi) {
      return { display: 'block' };
    } else {
      return { display: 'none' };
    }
  }

  renderHierarchy = () => {
    const { rootTaskGids, taskMap } = this.props.tasks;
    return (
        <ul id="root-ul-ctn" className="ul-ctn">
          {rootTaskGids.map((gid) => {
            return <Task
                     key={gid}
                     taskData={taskMap[gid]}
                     taskMap={taskMap} />
          })}
        </ul>
    )
  }

  render() {
    const { pursuances, currentPursuanceId } = this.props;
    return (
      <div className="content-ctn">
        <div id="task-hierarchy">
          <div id="task-hierarchy-title">
            <h2 id="tasks-title">Tasks:&nbsp;</h2>
            <h2 id="pursuance-title">{pursuances[currentPursuanceId] && pursuances[currentPursuanceId].name}</h2>
          </div>
          {this.renderHierarchy()}
          <TaskForm topLevel={true}/>
        </div>
      </div>
    );
  }
}

export default connect(({ pursuances, currentPursuanceId, tasks }) =>
  ({ pursuances, currentPursuanceId, tasks }), {
    getPursuances,
    getUsers,
    getTasks,
    addPostedRootTaskToHierarchy,
    addPostedSubTaskToHierarchy
})(TaskHierarchy);
