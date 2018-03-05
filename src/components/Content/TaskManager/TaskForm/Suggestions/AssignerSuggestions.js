import React from 'react';
import { connect } from 'react-redux';
import { addSuggestion, patchTask } from '../../../../../actions';
import { scrollIntoViewOptions } from '../../../../../utils/suggestions';
import { PURSUANCE_DISPLAY_PREFIX } from '../../../../../constants';
import './AssignerSuggestions.css';

const AssignerSuggestions = (props) => {
  const {
    autoComplete,
    addSuggestion,
    focusDatePicker,
    suggestionForm,
    patchTask,
    editMode,
    hideEditAssignee
  } = props;

  return (
    <div className='suggestions-container'>
      <ul className='suggestion-list'>
        {autoComplete.suggestions.map((suggestion, i) => {
          const activeItem = autoComplete.highlightedSuggestion === i;
          const suggestionName = suggestion.suggestionName
          let props = {
            key : i,
            onMouseDown : () =>  {
              if (editMode) {
                console.log(suggestionForm, 'gid');
                const patchedTask = {
                  gid: suggestionForm
                };
                if (suggestionName.startsWith(PURSUANCE_DISPLAY_PREFIX)) {
                  patchedTask.assigned_to_pursuance_id = suggestion.id;
                  patchedTask.assigned_to = null;
                } else {
                  patchedTask.assigned_to = suggestionName;
                  patchedTask.assigned_to_pursuance_id = null;
                }
                patchTask(patchedTask);
                hideEditAssignee();
              }else {
                addSuggestion(suggestionName, suggestionForm);
              }
              if (focusDatePicker) {
                focusDatePicker();
              }
            },
            className : activeItem ? 'active suggestion': 'suggestion',
          }
          if (activeItem) {
            props.ref = (item) => {
              if (item) item.scrollIntoView(scrollIntoViewOptions);
            }
          }
          return <li {...props}>{suggestionName}</li>
        })}
      </ul>
    </div>
  )
}

export default connect(({ autoComplete }) => ({ autoComplete }), { addSuggestion, patchTask })(AssignerSuggestions);
