import React from 'react';
import { connect } from 'react-redux';
import { filterSuggestion } from '../../../../../utils/suggestions';
import { PURSUANCE_DISPLAY_PREFIX } from '../../../../../constants';
import './AssignerInput.css';
import FaUserTimes from 'react-icons/lib/fa/user-times';
import {
  updateFormField,
  startSuggestions,
  stopSuggestions,
  addSuggestion,
  upSuggestion,
  downSuggestion,
  patchTask
} from '../../../../../actions';

const AssignerInput = (props) => {

  const {
    updateFormField,
    formId,
    pursuances,
    currentPursuanceId,
    users,
    autoComplete,
    startSuggestions,
    stopSuggestions,
    upSuggestion,
    downSuggestion,
    addSuggestion,
    focusDatePicker,
    taskForm,
    editMode,
    hideEditAssignee,
    patchTask,
    placeholder,
    assignedTo
  } = props;

  const isFromCurrentPursuance = formId.startsWith(currentPursuanceId + '_');

  // If task was assigned to currently viewed pursuance, then we can't reassign
  // to another pursuance
  const onlyShowUsers = () => !isFromCurrentPursuance && editMode;

  const onChange = (e) => {
    const { value, name } = e.target;
    const suggestions = onlyShowUsers() ? users : Object.assign({}, pursuances, users);
    if (suggestions[assignedTo]) {
      delete suggestions[assignedTo]
    }
    delete suggestions[currentPursuanceId];
    updateFormField(formId, name, value);
    startSuggestions(value, filterSuggestion, suggestions, formId);
  }

  const onFocus = (e) => {
    const suggestions = onlyShowUsers() ? users : Object.assign({}, pursuances, users);
    if (suggestions[assignedTo]) {
      delete suggestions[assignedTo]
    }
    delete suggestions[currentPursuanceId];
    startSuggestions(e.target.value, filterSuggestion, suggestions, formId);
  }

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      onBlur();
      return;
    }

    const { highlightedSuggestion, suggestions } = autoComplete;
    const suggestion = suggestions[highlightedSuggestion];

    if (e.key === 'Enter' && suggestions.length > 0) {
      e.preventDefault();
      const { suggestionName } = suggestion;
      if (editMode) {
        const patchedTask = {
          gid: formId
        };
        if (suggestionName.startsWith(PURSUANCE_DISPLAY_PREFIX)) {
          patchedTask.assigned_to_pursuance_id = suggestion.id;
          patchedTask.assigned_to = null;
        } else if(isFromCurrentPursuance){
          // Outsourcing from this pursuance to another pursuance
            // Assigning to a user in the current pursuance
            patchedTask.assigned_to_pursuance_id = null;
            patchedTask.assigned_to = suggestionName;
        } else {
            // Assigning this outsourced-to-us task to a member of the
            // current pursuance
            patchedTask.assigned_to = suggestionName;
          }
        patchTask(patchedTask);
        hideEditAssignee();
      } else {
        addSuggestion(suggestionName, formId);
      }
      if (focusDatePicker) {
        focusDatePicker();
      }
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

  const onBlur = () => {
    stopSuggestions();
    if (editMode) {
      hideEditAssignee();
    }
  }

  const clearAssignee = () => {
    const patchedTask = {
      gid: formId,
      assigned_to: null
    }
    if (placeholder[0] === '(') {
      patchedTask.assigned_to_pursuance_id = null;
    }
    patchTask(patchedTask);
  }

  let assigned_to = taskForm[formId] ? taskForm[formId].assigned_to : '';
  let autoFocus;

  if (editMode) {
    autoFocus = true;
  }

  return (
    <div className="assign-autocomplete-ctn">
      <div className="at-symbol">
        <span>@</span>
      </div>
      <input
        className="form-control assign-to"
        type="text"
        placeholder={placeholder || 'Assigned To'}
        value={assigned_to}
        name={'assigned_to'}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        autoFocus={autoFocus}
      />
      { editMode &&
        <div className="unassign-user-icon" onMouseDown={clearAssignee}>
          <FaUserTimes size={16}/>
        </div>
      }
    </div>
  )
}

export default connect(({ pursuances, currentPursuanceId, users, autoComplete, taskForm }) =>
  ({ pursuances, currentPursuanceId, users, autoComplete, taskForm}), {
   updateFormField,
   startSuggestions,
   stopSuggestions,
   upSuggestion,
   downSuggestion,
   addSuggestion,
   patchTask
})(AssignerInput);
