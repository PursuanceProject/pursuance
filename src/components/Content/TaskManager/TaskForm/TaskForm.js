import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import generateId from '../../../../utils/generateId';
import moment from 'moment';
import { connect } from 'react-redux';
import { filterSuggestion } from '../../../../utils/suggestions';
import AssignerSuggestions from './Suggestions/AssignerSuggestions';
import { PURSUANCE_DISPLAY_PREFIX } from '../../../../constants';
import {
  updateFormField,
  startSuggestions,
  showUsers,
  stopSuggestions,
  addSuggestion,
  upSuggestion,
  downSuggestion,
  postTask
} from '../../../../actions';
import './ReactDatePicker.css';
import './TaskForm.css';

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = { startDate: '' };
  }
  componentWillMount() {
    this.id = generateId('task');
  }

  onChange = (e) => {
    const { updateFormField, startSuggestions, users, pursuances, currentPursuanceId } = this.props;
    const { value, name } = e.target;

    updateFormField(this.id, name, value);

    if (name === 'assigned_to') {
      const suggestions = Object.assign({}, pursuances, users);
      delete suggestions[currentPursuanceId];
      startSuggestions(value, filterSuggestion, suggestions, this.id);
    }
  }

  onKeyDown = (e) => {
    const { addSuggestion, taskForm, upSuggestion, downSuggestion } = this.props;
    const { highlightedSuggestion, suggestions } = taskForm;

    if (e.key === 'Enter' && suggestions.length > 0) {
      e.preventDefault();
      addSuggestion(suggestions[highlightedSuggestion].suggestionName);
      this.focusDatePicker();
    }
    if (e.key === 'ArrowUp' && suggestions) {
      e.preventDefault();
      upSuggestion();
    }
    if (e.key === 'ArrowDown' && suggestions) {
      e.preventDefault();
      downSuggestion();
    }
  }

  handleDateSelect = (date) => {
    this.setState({ startDate: date });
    if (date) {
      //currently ignored untill date Picker input is updating Redux value
      this.props.updateFormField(this.id, 'due_date', date.format());
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { postTask, taskForm, currentPursuanceId, pursuances, taskData } = this.props;
    const task = taskForm[this.id];
    if (!task) {
      console.log("Thou shalt not submit empty TaskForm!");
      return;
    }
    if (task.assigned_to.startsWith(PURSUANCE_DISPLAY_PREFIX)) {
      for (var key in pursuances) {
        if (pursuances[key].suggestionName === task.assigned_to) {
          task.assigned_to_pursuance_id = pursuances[key].id;
          delete task.assigned_to;
        }
      }
    }
    task.pursuance_id = currentPursuanceId;
    task.due_date = moment(document.getElementsByName(this.id)[0][2].value).format();
    if (taskData.gid) {
      task.parent_task_gid = taskData.gid;
    }
    postTask(task);
  }

  onFocus = (e) => {
    const { users, pursuances, startSuggestions, currentPursuanceId } = this.props;
    console.log(pursuances, 'pursuances');
    const suggestions = Object.assign({}, pursuances, users);
    delete suggestions[currentPursuanceId];
    startSuggestions(e.target.value, filterSuggestion, suggestions, this.id);
  }

  onBlur = () => {
    this.props.stopSuggestions();
  }

  focusDatePicker = () => this.datePickerRef.input.focus();

  render () {
    let assigned_to
    const { taskForm } = this.props;
    if (taskForm[this.id]) {
      assigned_to = taskForm[this.id].assigned_to;
    }
    return (
      <div className="task-form-container">
        <form className="task-form" name={this.id} autoComplete="off">
          <div id="input-task-title-ctn" className="">
            <input
              id="input-task-title"
              type="text"
              className="form-control"
              placeholder="Task Title"
              name={'title'}
              onChange={this.onChange}
            />
          </div>
          <div className="assign-autocomplete">
            {
              taskForm.suggestions
              &&
              this.id === taskForm.suggestionForm
              &&
              <AssignerSuggestions focusDatePicker={this.focusDatePicker}/>
            }
            <div className="at-symbol">
              <span>@</span>
            </div>
            <input
              className="form-control assign-to"
              type="text"
              placeholder="Assigned To"
              value={assigned_to || ''}
              name={'assigned_to'}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onKeyDown={this.onKeyDown}
            />
          </div>
          <div className="date-picker-ctn">
            <DatePicker
              placeholderText="YYYY-MM-DD"
              dateFormat="YYYY-MM-DD"
              ref={(input) => this.datePickerRef = input}
              selected={this.state.startDate}
              onSelect={this.handleDateSelect}
              onChange={this.handleDateSelect}
            />
          </div>
          <button className="btn btn-default save-task-btn" onClick={this.handleSubmit}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default connect(({ users, taskForm, currentPursuanceId, pursuances }) =>
  ({ users, taskForm, currentPursuanceId, pursuances }), {
   updateFormField,
   startSuggestions,
   showUsers,
   stopSuggestions,
   addSuggestion,
   upSuggestion,
   downSuggestion,
   postTask
})(TaskForm);
