import React, { Component } from 'react';
import TaskForm from '../TaskManager/TaskForm/TaskForm';
import './TaskHierarchy.css';

import * as postgrest from '../../utils/postgrest';

class TaskHierarchy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
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
      <div key={'' + task.pursuance_id + '_' + task.id} className="row">
        <div className="task-title">
        {task.title}
      </div>

      <div className="task-assigned_to">
        {task.assigned_to && '@'+task.assigned_to}
      </div>

      <div className="task-due_date">
        {task.due_date && postgrest.formatDate(task.due_date)}
      </div>

      <ul>
        task.subtasks.map((task) => renderTask(task))
      </ul>
    </li>
  )

  render () {
    return (
      <div className="task-hierarchy-container">

        <ul>
          {this.state.tasks.map((task) => renderTask(task))}
        </ul>

        <TaskForm />
      </div>
    );
  }
}

export default TaskHierarchy;
