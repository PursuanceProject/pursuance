import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import './ReactDatePicker.css';
import './TaskForm.css';
import generateId from '../../../../utils/generateId';
import moment from 'moment';
import { connect } from 'react-redux';
import { filterUsers } from '../../../../utils/suggestions';
import AssignerSuggestions from './Suggestions/AssignerSuggestions';
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

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = { startDate: '' };
  }
  componentWillMount() {
    this.id = generateId('task');
  }

  onChange = (e) => {
    const { updateFormField, startSuggestions, users } = this.props;
    const { value, name } = e.target;

    updateFormField(this.id, name, value);

    if (name === 'assigned_to') {
      startSuggestions(value, filterUsers, users);
    }
  }

  onKeyDown = (e) => {
    const { addSuggestion, taskForm, upSuggestion, downSuggestion } = this.props;
    const { highlightedSuggestion, suggestions } = taskForm;

    if (e.key === 'Enter' && suggestions.length > 0) {
      e.preventDefault()
      addSuggestion(suggestions[highlightedSuggestion].username);
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
    const { postTask, taskForm, currentPursuanceId } = this.props;
    const task = taskForm[this.id];
    task.pursuance_id = currentPursuanceId;
    task.due_date = moment(document.getElementsByName(this.id)[0][2].value).format();
    postTask(task);
  }

  onFocus = (e) => {
    const { users, startSuggestions } = this.props;
    startSuggestions(e.target.value, filterUsers, users, this.id);
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
            {this.props.taskForm.suggestions
              &&
              <AssignerSuggestions focusDatePicker={this.focusDatePicker}/>
            }
            <div className="at-symbol">
              <span>@</span>
            </div>
            <input
                type="text"
                className="form-control assign-to"
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
          <button className="btn btn-default" onClick={this.handleSubmit}>
            Save
          </button>
        </form>

      </div>
    );
  }
}

export default connect(({ users, taskForm, currentPursuanceId }) =>
  ({ users, taskForm, currentPursuanceId }), {
   updateFormField,
   startSuggestions,
   showUsers,
   stopSuggestions,
   addSuggestion,
   upSuggestion,
   downSuggestion,
   postTask
})(TaskForm);
