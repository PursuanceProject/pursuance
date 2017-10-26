import React, { Component } from 'react';
import TaskForm from '../TaskManager/TaskForm/TaskForm';
import * as postgrest from '../../../utils/postgrest';
import TiPlus from 'react-icons/lib/ti/plus';
import TiMinus from 'react-icons/lib/ti/minus';
import './TaskHierarchy.css';
import '../Content.css';


class TaskHierarchy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          "id": 1,
          "pursuance_id": 1,
          "title": "Kick ass",
          "title_enc": "",
          "deliverables": "Finish everything. Now.",
          "deliverables_enc": "",
          "assigned_to": null,
          "created": "2017-10-20T21:48:56.834231-07:00",
          "parent_task_id": null,
          "parent_task_pursuance_id": 1,
          "subtasks": [
            {
              "id": 3,
              "pursuance_id": 1,
              "title": "Child of \"Kick ass\"",
              "title_enc": "",
              "deliverables": "Finish everything. AGAIN.",
              "deliverables_enc": "",
              "assigned_to": null,
              "created": "2017-10-20T21:49:27.671124-07:00",
              "parent_task_id": 1,
              "parent_task_pursuance_id": 1,
              "subtasks": [
                {
                  "id": 7,
                  "pursuance_id": 1,
                  "title": "Grandchild of \"Kick ass\"",
                  "title_enc": "",
                  "deliverables": "Finish everything. A fourth time.",
                  "deliverables_enc": "",
                  "assigned_to": null,
                  "created": "2017-10-20T21:53:35.897529-07:00",
                  "parent_task_id": 3,
                  "parent_task_pursuance_id": 1
                }
              ]
            },
            {
              "id": 5,
              "pursuance_id": 1,
              "title": "Child 2 of \"Kick ass\"",
              "title_enc": "",
              "deliverables": "Finish everything. A third time.",
              "deliverables_enc": "",
              "assigned_to": null,
              "created": "2017-10-20T21:50:51.386551-07:00",
              "parent_task_id": 1,
              "parent_task_pursuance_id": 1
            }
          ]
        },
        // {
        //   "id": 2,
        //   "pursuance_id": 1,
        //   "title": "Take names",
        //   "title_enc": "",
        //   "deliverables": "",
        //   "deliverables_enc": "",
        //   "assigned_to": null,
        //   "created": "2017-10-20T21:48:56.834231-07:00",
        //   "parent_task_id": null,
        //   "parent_task_pursuance_id": 1,
        //   "subtasks": [
        //     {
        //       "id": 4,
        //       "pursuance_id": 1,
        //       "title": "Child of \"Take names\"",
        //       "title_enc": "",
        //       "deliverables": "",
        //       "deliverables_enc": "",
        //       "assigned_to": null,
        //       "created": "2017-10-20T21:49:27.671124-07:00",
        //       "parent_task_id": 2,
        //       "parent_task_pursuance_id": 1,
        //       "subtasks": [
        //         {
        //           "id": 8,
        //           "pursuance_id": 1,
        //           "title": "Grandchild of \"Take names\"",
        //           "title_enc": "",
        //           "deliverables": "",
        //           "deliverables_enc": "",
        //           "assigned_to": null,
        //           "created": "2017-10-20T21:53:35.897529-07:00",
        //           "parent_task_id": 4,
        //           "parent_task_pursuance_id": 1
        //         }
        //       ]
        //     },
        //     {
        //       "id": 6,
        //       "pursuance_id": 1,
        //       "title": "Child 2 of \"Take names\"",
        //       "title_enc": "",
        //       "deliverables": "",
        //       "deliverables_enc": "",
        //       "assigned_to": null,
        //       "created": "2017-10-20T21:50:51.386551-07:00",
        //       "parent_task_id": 2,
        //       "parent_task_pursuance_id": 1
        //     }
        //   ]
        // }
      ]
    };
  }

  componentWillMount() {
    // const pursuanceID = this.props.match.params.pursuance_id;
    // postgrest.getJSON(`/tasks?pursuance_id=eq.${pursuanceID}&order=created.asc,id.asc`)
    //   .then((tasks) => {
    //     this.setState({
    //       tasks: tasks
    //     })
    //   })
    //   .catch((err) => {
    //     console.log('Error fetching tasks:', err);
    //   });
  }

  toggleRow = () => {

  }

  recursiveTask = (task) => {
    return (
      <ul className="ul-ctn">
        {task.subtasks.map((task) => this.renderTask(task))}
      </ul>
    );
  }

  renderTask = (task) => (
    <li className="li-task-ctn"  key={'' + task.pursuance_id + '_' + task.id}>
      <div className="task-row-ctn">
        <div className="plus-ctn" onClick={this.toggleRow}>
          <TiMinus />
        </div>
        <div className="task-title">
          {task.title}
        </div>
        <div className="task-assigned-to">
          {task.assigned_to && '@'+task.assigned_to}
        </div>
        <div className="task-due-date">
          {task.due_date && postgrest.formatDate(task.due_date)}
        </div>
      </div>
      { task.subtasks ? this.recursiveTask(task) : null }
    </li>
  )

  getTaskHierarchy = () => {
    return this.state.tasks.map((task) => this.renderTask(task));
  }

  render() {
    return (
      <div className="content-ctn">

        <ul className="ul-ctn">
          {this.getTaskHierarchy()}
        </ul>

        <TaskForm />
      </div>
    );
  }
}

export default TaskHierarchy;
