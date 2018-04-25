import React, { Component } from 'react';
import generateId from '../../../../utils/generateId';
import moment from 'moment';
import { connect } from 'react-redux';
import { filterSuggestion } from '../../../../utils/suggestions';
import AssignerSuggestions from './Suggestions/AssignerSuggestions';
import AssignerInput from './AssignerInput/AssignerInput';
import DueDatePicker from './DatePicker/DatePicker';
import { PURSUANCE_DISPLAY_PREFIX } from '../../../../constants';
import {
  updateFormField,
  clearTaskFormFields,
  setTaskFormParentGid,
  startSuggestions,
  showUsers,
  stopSuggestions,
  addSuggestion,
  upSuggestion,
  downSuggestion,
  postTask
} from '../../../../actions';
import './TaskForm.css';

class TaskForm extends Component {

  componentWillMount() {
    const { parentGid, updateFormField, id } = this.props;
    // Use `id` from props or create new one
    this.id = id || generateId('task');
    updateFormField(this.id, 'parent_task_gid', parentGid || null);
  }

  getClassName = () => {
    if (this.props.topLevel) {
      return 'task-form-ctn';
    } else {
      return 'task-form-ctn nested-form';
    }
  }

  onTitleKeyDown = (e) => {
    const parentGid = this.props.taskForm[this.id].parent_task_gid;
    const { taskMap } = this.props.tasks;
    const title = this.props.taskForm[this.id].title || '';
    if (e.key === 'Tab' && title.length === 0) {
      e.preventDefault();
      let newParentGid;
      const parent = taskMap[parentGid];
      if (e.nativeEvent.shiftKey) {
        // Unindent
        if (parent && parent.parent_task_gid) {
          newParentGid = taskMap[parent.parent_task_gid].gid;
        } else {
          newParentGid = null;
        }
      } else {
        // Indent
        if (parent) {
          const numChildren = parent.subtask_gids.length;
          if (numChildren > 0) {
            newParentGid = parent.subtask_gids[numChildren-1];
          }
        }
      }
      console.log(this.id, 'newParentGid:', newParentGid);
      if (newParentGid) {
        this.props.setTaskFormParentGid(this.id, newParentGid, parentGid);
      }
    }
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

  onAssignerKeyDown = (e) => {
    const { addSuggestion, autoComplete, upSuggestion, downSuggestion } = this.props;
    const { highlightedSuggestion, suggestions } = autoComplete;

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

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      postTask, taskForm, currentPursuanceId, pursuances, clearTaskFormFields
    } = this.props;
    const task = taskForm[this.id];
    const assignedTo = task.assigned_to;
    if (!task) {
      console.log("Thou shalt not submit empty TaskForm!");
      return;
    }
    if (assignedTo && assignedTo.startsWith(PURSUANCE_DISPLAY_PREFIX)) {
      for (var key in pursuances) {
        if (pursuances[key].suggestionName === assignedTo) {
          task.assigned_to_pursuance_id = pursuances[key].id;
          delete task.assigned_to;
          break;
        }
      }
    }
    task.pursuance_id = currentPursuanceId;
    if (task.due_date_raw) {
      task.due_date = moment(task.due_date_raw).format();
    }
    delete task.due_date_raw;

    // TODO: Chain these 2 together using a promise or RxJS
    postTask(task);
    clearTaskFormFields(this.id);

    this.titleRef.focus();
  }

  onFocus = (e) => {
    const { users, pursuances, startSuggestions, currentPursuanceId } = this.props;
    const suggestions = Object.assign({}, pursuances, users);
    delete suggestions[currentPursuanceId];
    startSuggestions(e.target.value, filterSuggestion, suggestions, this.id);
  }

  onBlur = () => {
    this.props.stopSuggestions();
  }

  focusDatePicker = () => {
    this.dueDatePicker.datePickerRef.input.focus();
  }

  render() {
    const { taskForm, autoComplete } = this.props;
    const { title, assigned_to, due_date_raw } = taskForm[this.id] || {};
    return (
      <div className={this.getClassName()}>
        <form className="task-form" name={this.id} autoComplete="off">
          <div id="input-task-title-ctn" className="">
            <input
              id="input-task-title"
              type="text"
              className="form-control"
              placeholder="Task Title"
              name={'title'}
              value={title || ''}
              autoFocus
              ref={(input) => this.titleRef = input}
              onChange={this.onChange}
              onKeyDown={this.onTitleKeyDown}
              maxLength={200}
            />
          </div>
          <div className="assign-autocomplete-ctn">
            {
              autoComplete.suggestions
              &&
              this.id === autoComplete.suggestionForm
              &&
              <AssignerSuggestions
                focusDatePicker={this.focusDatePicker}
                suggestionForm={this.id}
                editMode={false}
              />
            }
            <AssignerInput
               placeholder={"Assigned To"}
               formId={this.id}
               assigned_to={assigned_to}
               focusDatePicker={this.focusDatePicker}
               editMode={false}
             />
          </div>
          <DueDatePicker
            id={this.id}
            selected={due_date_raw || ''}
            onRef={ref => (this.dueDatePicker = ref)}
           />
          <button className="btn btn-default save-task-btn" onClick={this.handleSubmit}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default connect(({ users, taskForm, currentPursuanceId, pursuances, tasks, autoComplete }) =>
  ({ users, taskForm, currentPursuanceId, pursuances, tasks, autoComplete }), {
   updateFormField,
   clearTaskFormFields,
   setTaskFormParentGid,
   startSuggestions,
   showUsers,
   stopSuggestions,
   addSuggestion,
   upSuggestion,
   downSuggestion,
   postTask
})(TaskForm);
