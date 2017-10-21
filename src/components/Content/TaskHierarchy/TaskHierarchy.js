import React, { Component } from 'react';
import TaskForm from '../TaskManager/TaskForm/TaskForm';
import './TaskHierarchy.css';
import '../Content.css';

import * as postgrest from '../../../utils/postgrest';

class TaskHierarchy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  componentWillMount() {
    const pursuanceID = this.props.match.params.pursuance_id;
    postgrest.getJSON(`/tasks?pursuance_id=eq.${pursuanceID}&order=created.asc,id.asc`)
      .then((tasks) => {
        this.setState({
          tasks: tasks
        })
      })
      .catch((err) => {
        console.log('Error fetching tasks:', err);
      })
  }

  renderTask = (task) => (
    <li>
      <div key={'' + task.pursuance_id + '_' + task.id} className="">
        <div className="task-title">
          {task.title}
        </div>
      </div>

      <div className="task-assigned_to">
        {task.assigned_to && '@'+task.assigned_to}
      </div>

      <div className="task-due_date">
        {task.due_date && postgrest.formatDate(task.due_date)}
      </div>

      <ul>
        {(task.subtasks || []).map((task) => this.renderTask(task))}
      </ul>
    </li>
  )

  render() {
    return (
      <div className="content-ctn">

        <ul>
          {this.state.tasks.map((task) => this.renderTask(task))}
        </ul>

        <TaskForm />
      </div>
    );
  }
}

export default TaskHierarchy;
