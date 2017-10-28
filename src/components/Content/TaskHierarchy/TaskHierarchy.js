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
      tasks: []
    };
  }

  componentWillMount() {
    this.props.getUsers();

    const pursuanceId = this.props.pursuanceId;
    postgrest.getJSON(`/tasks?pursuance_id=eq.${pursuanceId}&order=created.asc,id.asc`)
      .then((tasks) => {
        this.setState({
          tasks: tasks
        });
      })
      .catch((err) => {
        console.log('Error fetching tasks:', err);
      });
  }

  toggleRow = () => {
    this.setState({
      ...this.state,
      displayLi: !this.state.displayLi
    });
  }

  styleLi = () => {
    if(this.state.displayLi) {
      return { display: 'block' }
    } else {
      return { display: 'none' }
    }
  }

  mapTaskChildren = () => {
    console.log('Task: ', this.state.tasks);
    return this.state.tasks.map((task) => {
      return <Task key={task.gid} taskData={task}/>;
    });
  }

  render() {
    return (
      <div className="content-ctn">
        {this.mapTaskChildren()}
        <TaskForm />
      </div>
    );
  }
}

export default connect(null, { getUsers })(TaskHierarchy);
