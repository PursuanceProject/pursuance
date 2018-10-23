import React, { Component } from 'react';
import Task from './Task/Task';
import { toast, ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { showTaskInPursuance } from '../../../utils/tasks';
import {
  getUsers,
  getTasks,
  getPursuances,
  addPostedRootTaskToHierarchy,
  addPostedSubTaskToHierarchy,
  removeSuccessToast
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

  componentDidMount() {
    const { getPursuances, getUsers, getTasks, currentPursuanceId, showSuccessToast, pursuances } = this.props;
    getUsers();
    getTasks(currentPursuanceId);
    if (Object.keys(pursuances).length === 0) {
      getPursuances();
    }
    if (showSuccessToast) {
      toast.success('New pursuance created! Ready to rock.');
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentPursuanceId !== this.props.currentPursuanceId) {
      this.componentDidMount();
    }
  }

  componentWillUnmount(){
    const { showSuccessToast, removeSuccessToast } = this.props;
    if (showSuccessToast) {
      removeSuccessToast();
    }
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

  getPursuanceName = (pursuances, id) => {
    const rawPursuance = pursuances[id];
    if (rawPursuance !== undefined) {
      return rawPursuance.name;
    }
  }

  renderHierarchy = () => {
    const { currentPursuanceId } = this.props;
    const { rootTaskGids, taskMap } = this.props.tasks;
    return (
      <ul id="root-ul-ctn" className="ul-ctn">
        {
          rootTaskGids.map((gid) => {
            const taskData = taskMap[gid];
            if (!showTaskInPursuance(taskData, currentPursuanceId)) {
              return null;
            }
            return (
              <Task
                key={gid}
                taskData={taskData}
                taskMap={taskMap} />
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="content">
        <div id="task-hierarchy">
          <div id="task-labels">
            <div>
              <span>
                Title
              </span>
            </div>
            <div className="label-task-icons">
              <span>

              </span>
            </div>
            <div className="label-status hide-small">
              <span>
                Status
              </span>
            </div>
            <div className="label-assigned-to hide-small">
              <span>
                Assigned To
              </span>
            </div>
            <div className="label-due-date hide-small">
              <span>
                Due Date
              </span>
            </div>
          </div>
          <ToastContainer
            position="top-center"
            type="success"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false} />
          {this.renderHierarchy()}
        </div>
      </div>
    );
  }
}

export default connect(({ pursuances, currentPursuanceId, tasks, showSuccessToast }) =>
  ({ pursuances, currentPursuanceId, tasks, showSuccessToast }), {
    getUsers,
    getTasks,
    getPursuances,
    addPostedRootTaskToHierarchy,
    addPostedSubTaskToHierarchy,
    removeSuccessToast
})(TaskHierarchy);
