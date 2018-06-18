import React from 'react';
import { connect } from 'react-redux';
import { addSuggestion, setTaskAssignee } from '../../../../../actions';
import { scrollIntoViewOptions } from '../../../../../utils/suggestions';
import { PURSUANCE_DISPLAY_PREFIX } from '../../../../../constants';
import './AssignerSuggestions.css';

const AssignerSuggestions = (props) => {
  const {
    autoComplete,
    addSuggestion,
    focusDatePicker,
    suggestionForm,
    setTaskAssignee,
    editMode,
    hideEditAssignee,
    currentPursuanceId
  } = props;

  const isFromCurrentPursuance = suggestionForm.startsWith(currentPursuanceId + '_');

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
                const patchedTask = {
                  gid: suggestionForm
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
                setTaskAssignee(patchedTask);
                hideEditAssignee();
              }
               else {
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

export default connect(({ autoComplete, currentPursuanceId }) => ({ autoComplete, currentPursuanceId }), { addSuggestion, setTaskAssignee })(AssignerSuggestions);
