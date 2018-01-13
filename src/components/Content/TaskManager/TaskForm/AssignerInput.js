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

const AssignerInput = ({ updateFormField, formId, assigned_to, startSuggestions,
   pursuances, currentPursuanceId, users }) => {

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
      // onKeyDown={this.onAssignerKeyDown}
    />
  </div>
  )
}

export default connect(({ pursuances, currentPursuanceId, users }) =>
  ({ pursuances, currentPursuanceId, users }), {
   updateFormField,
   startSuggestions })
(AssignerInput);
