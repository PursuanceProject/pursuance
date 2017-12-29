import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterSuggestion } from '../../../../utils/suggestions';
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

const AssignerInput = (props) => {

  const {
    updateFormField,
    formId,
    assigned_to,
    startSuggestions,
    pursuances,
    currentPursuanceId,
    users,
    autoComplete,
    upSuggestion,
    downSuggestion,
    addSuggestion,
    focusDatePicker  } = props;

  const onChange = (e) => {
    const { value, name } = e.target;
    const suggestions = Object.assign({}, pursuances, users);
    delete suggestions[currentPursuanceId];
    updateFormField(formId, name, value);
    startSuggestions(value, filterSuggestion, suggestions, formId);
  }

  const onFocus = (e) => {
    const suggestions = Object.assign({}, pursuances, users);
    delete suggestions[currentPursuanceId];
    startSuggestions(e.target.value, filterSuggestion, suggestions, formId);
  }

  const onKeyDown = (e) => {
    // const { autoComplete, upSuggestion, downSuggestion, addSuggestion } = this.props;
    const { highlightedSuggestion, suggestions } = autoComplete;

    if (e.key === 'Enter' && suggestions.length > 0) {
      e.preventDefault();
      // updateFormField(formId, e.target.name, suggestions[highlightedSuggestion].suggestionName)
      addSuggestion(suggestions[highlightedSuggestion].suggestionName, formId);
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

  return (
    <div>
    <div className="at-symbol">
      <span>@</span>
    </div>
    <input
      className="form-control assign-to"
      type="text"
      placeholder="Assigned To"
      value={assigned_to || ''}
      name={'assigned_to'}
      onChange={onChange}
      onFocus={onFocus}
      // onBlur={this.onBlur}
      onKeyDown={onKeyDown}
    />
  </div>
  )
}

export default connect(({ pursuances, currentPursuanceId, users, autoComplete }) =>
  ({ pursuances, currentPursuanceId, users, autoComplete}), {
   updateFormField,
   startSuggestions,
   upSuggestion,
   downSuggestion,
   addSuggestion
})
(AssignerInput);
